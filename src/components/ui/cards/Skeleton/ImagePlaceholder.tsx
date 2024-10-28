// material-ui
import Skeleton, { SkeletonProps } from '@mui/material/Skeleton';

const ImagePlaceholder = ({...others}: SkeletonProps) => <Skeleton variant="rectangular" {...others} animation="wave"/>;

export default ImagePlaceholder;
