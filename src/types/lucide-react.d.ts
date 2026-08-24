declare module "lucide-react" {
  import type { SVGProps } from "react";

  type IconProps = SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number | string };
  export const ArrowLeft: (props: IconProps) => JSX.Element;
  export const Check: (props: IconProps) => JSX.Element;
  export const Menu: (props: IconProps) => JSX.Element;
  export const RotateCcw: (props: IconProps) => JSX.Element;
  export const Save: (props: IconProps) => JSX.Element;
  export const Search: (props: IconProps) => JSX.Element;
  export const X: (props: IconProps) => JSX.Element;
}
