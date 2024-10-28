import { ComponentType, LazyExoticComponent, Suspense } from 'react';
import Loader from './Loader';
import { PropsOf } from "@emotion/react";

const Loadable = (Component: LazyExoticComponent<ComponentType<any>>) => (props: PropsOf<ComponentType<any>>) =>
    (
        <Suspense fallback={<Loader/>}>
            <Component {...props} />
        </Suspense>
    );
export default Loadable;
