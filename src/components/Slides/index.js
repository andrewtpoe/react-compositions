import { flattenDeep } from 'lodash';

import Intro from './Intro';
import Terminology from './Terminology';
import ResponsiveProblem from './ResponsiveProblem';
import ResponsiveSolution from './ResponsiveSolution';
import TheEnd from './TheEnd';

export default flattenDeep([
  Intro,
  Terminology,
  ResponsiveProblem,
  ResponsiveSolution,
  TheEnd,
]);
