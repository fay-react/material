/**
 * Create by fay on 2018-10-26 00:39
 */
import Immutable from 'immutable';
import {DefaultDraftBlockRenderMap} from 'draft-js';

const blockRenderMap = Immutable.Map({
    'mySub': {
        element: 'sub',
        wrapper: <sub/>
    },
    'sup': {
        element: 'sup',
        wrapper: <sup/>
    },
    'img': {
      element: 'img',
      editable: false,
      props: {
        foo: 'bar',
      },
  },
});


const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);

export default extendedBlockRenderMap;