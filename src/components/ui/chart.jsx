import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Chart theme mapping
const THEMES = { light: "", dark: "[data-theme=dark]" };

const ChartContext = React.createContext(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) throw new Error("useChart must be used within a ChartContainer");
  return context;
}

const ChartContainer = React.forwardRef(({ id, className, children, config = {}, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "ChartContainer";

const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(([_, conf]) => conf.theme || conf.color);
  if (!colorConfig.length) return null;

  const styleString = Object.entries(THEMES)
    .map(([theme, prefix]) => {
      return `${prefix} [data-chart=${id}] {\n${colorConfig
        .map(([key, conf]) => {
          const color = (conf.theme && conf.theme[theme]) || conf.color;
          return color ? `  --color-${key}: ${color};` : null;
        })
        .filter(Boolean)
        .join("\n")}\n}`;
    })
    .join("\n");

  return <style dangerouslySetInnerHTML={{ __html: styleString }} />;
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef(
  ({ active, payload, className, indicator = "dot", hideLabel = false, hideIndicator = false, labelKey, nameKey, formatter }, ref) => {
    const { config } = useChart();

    if (!active || !payload?.length) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {payload.map((item, index) => {
          const key = nameKey || item.name || item.dataKey || "value";
          const itemConfig = config[key] || {};
          const indicatorColor = itemConfig.color || item.color;

          return (
            <div key={index} className="flex w-full items-center gap-2">
              {!hideIndicator && <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: indicatorColor }} />}
              <span>{itemConfig.label || item.name}</span>
              <span>{formatter ? formatter(item.value) : item.value}</span>
            </div>
          );
        })}
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltipContent";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef(({ className, payload, hideIcon = false, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();
  if (!payload?.length) return null;

  return (
    <div
      ref={ref}
      className={cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className)}
    >
      {payload.map((item, index) => {
        const key = nameKey || item.dataKey || "value";
        const itemConfig = config[key] || {};
        return (
          <div key={index} className="flex items-center gap-1.5">
            {!hideIcon && <div className="h-2 w-2 rounded" style={{ backgroundColor: item.color }} />}
            {itemConfig.label}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegendContent";

// Helper to extract config from payload
function getPayloadConfigFromPayload(config, payload, key) {
  if (!payload || typeof payload !== "object") return undefined;
  const payloadData = payload.payload && typeof payload.payload === "object" ? payload.payload : payload;
  return config[key] || config[payloadData[key]] || undefined;
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle, useChart, getPayloadConfigFromPayload };
