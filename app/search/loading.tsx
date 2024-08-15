import Grid, { GridItem } from 'components/grid';

export default function Loading() {
  return (
    <Grid className="grid-cols-2 lg:grid-cols-3">
      {Array(12)
        .fill(0)
        .map((_, index) => {
          return <GridItem key={index} className="animate-pulse bg-neutral-100 " index={index} />;
        })}
    </Grid>
  );
}
