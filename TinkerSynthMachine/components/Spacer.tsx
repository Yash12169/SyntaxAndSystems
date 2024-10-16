interface Props extends React.HTMLAttributes<HTMLDivElement> {
    size: number | string;
  }
  
  function Spacer({ size, style = {}, ...delegated }: Props) {
    return (
      <div
        {...delegated}
        style={{ minWidth: size, minHeight: size, ...style }}
      />
    );
  }
  
  export default Spacer;
  