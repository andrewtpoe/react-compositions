import { flattenDeep } from 'lodash';

import Intro from './Intro';
import WhoAmI from './WhoAmI';
import OurTools from './OurTools';
import CoreTerminology from './CoreTerminology';
import BlocksElementsModifiers from './BlocksElementsModifiers';
import Components from './Components';
import Compositions from './Compositions';
import Containers from './Containers';
import ResponsiveProblem from './ResponsiveProblem';
import ResponsiveSolution from './ResponsiveSolution';
import TheEnd from './TheEnd';

export default flattenDeep([
  Intro,
  WhoAmI,
  OurTools,
  CoreTerminology,
  BlocksElementsModifiers,
  Components,
  Compositions,
  Containers,
  ResponsiveProblem,
  ResponsiveSolution,
  TheEnd,
]);
