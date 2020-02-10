import { lazy } from 'react'
import { SAMPLE_TYPE } from '../common/constants';

const Fiber = { tags: [SAMPLE_TYPE.FIBER], Component: lazy(() => import('./DemoFiber')) };
const Wrapper = { tags: [SAMPLE_TYPE.HYBRID], Component: lazy(() => import('../samples/DemoTemplate')) };
const Legacy = { tags: [SAMPLE_TYPE.LEGACY], Component: lazy(() => import('../samples/DemoTemplate')) };
const TestLegacy = { tags: [SAMPLE_TYPE.LEGACY], Component: lazy(() => import('../samples/BoxSplit.test')) };

export {
  Fiber,
  Wrapper,
  Legacy,
  TestLegacy
}