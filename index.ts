import { Step } from "./step";
import { createActionBar, createNextActionButton, createBackActionButton } from './create-action-bar';
import { initializeStepper } from './initialize-stepper';

import "./style.css";

const parentContainer = document.getElementById('container');

const StepperComponent = (steps: Step[]) => {
   if(!steps || steps?.length === 0){
     return null;
   }

   const stepperContainerEl = initializeStepper(steps);

   const actionBarEl = createActionBar();
   const nextBtnEl = createNextActionButton('Next');
   const backBtnEl = createBackActionButton('Back');

   actionBarEl.append(backBtnEl);
   actionBarEl.append(nextBtnEl);

   parentContainer.append(stepperContainerEl);
   parentContainer.append(actionBarEl);
};

const stub: Step[] = [{
  id: '1',
  name: 'Process 1'
},
{
  id: '2',
  name: 'Process 2'
},
{
  id: '3',
  name: 'Process 3'
}];

StepperComponent(stub);