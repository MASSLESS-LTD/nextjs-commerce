import clsx from 'clsx';
function Grid(props: React.ComponentProps<'ul'>) {
  return (
    <ul {...props} className={clsx('grid grid-flow-row gap-4', props.className)}>
      {props.children}
    </ul>
  );
}

function GridItem(props: any) {
  return (
    <li
      {...props}
      className={clsx('aspect-square transition-opacity', props.className)}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
      {props.children}
    </li>
  );
}

Grid.Item = GridItem;

export default Grid;
