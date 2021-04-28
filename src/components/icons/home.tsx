import SvgIcon, { SvgIconProps } from "@material-ui/core/SvgIcon";
import preact from "preact";

export default function HomeIcon(props: SvgIconProps): preact.VNode {
  return (
    <SvgIcon {...props}>
      <path d="M12.611 0.20898L23.611 8.70898C23.8561 8.89819 23.9998 9.1903 24 9.49998V23C24 23.5523 23.5523 24 23 24H1C0.447715 24 0 23.5523 0 23V9.49998C0.000195328 9.1903 0.143851 8.89819 0.389 8.70898L11.389 0.20898C11.749 -0.0688461 12.251 -0.0688461 12.611 0.20898ZM15 15H9V24H15V15Z" />
    </SvgIcon>
  );
}
