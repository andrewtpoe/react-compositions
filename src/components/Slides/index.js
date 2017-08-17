import { flattenDeep } from 'lodash';

import Intro from './Intro';
import Terminology from './Terminology';
import Problems from './Problems';
import ResponsiveSolution from './ResponsiveSolution';
import TheEnd from './TheEnd';

export default flattenDeep([
  Intro,
  Terminology,
  Problems,
  ResponsiveSolution,
  TheEnd,
]);
