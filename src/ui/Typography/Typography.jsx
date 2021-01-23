import React from "react";
import cn from "classnames";

import "./Typography.scss";

export const Typography = (props) => {
  const {
    className,
    family,
    size,
    children,
    noWrap,
    align,
    color,
    component: Component = "span",
    weight = "regular",
    ...rest
  } = props;

  return (
    <Component
      className={cn(
        "ui-typography",
        {
          [`ui-typography_family-${family}`]: Boolean(family),
          [`ui-typography_size-${size}`]: Boolean(size),
          [`ui-typography_weight-${weight}`]: Boolean(weight),
          ["ui-typography_no-wrap"]: noWrap,
          [`ui-typography_align-${align}`]: Boolean(align),
          [`ui-typography_color-${color}`]: Boolean(color),
        },
        className
      )}
      {...rest}>
      {children}
    </Component>
  );
};
