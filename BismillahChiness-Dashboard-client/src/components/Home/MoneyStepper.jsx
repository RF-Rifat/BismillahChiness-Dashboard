/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Stepper,
  Step,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export function MoneyStepper({ amount, setInitialDeposit }) {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className="w-full">
      <CardHeader
        floated={false}
        // variant="gradient"
        // color="gray"
        className="grid m-0 place-items-center shadow-none"
      >
        <div className="w-full pl-6 pr-10 py-4 pb-16">
          <Stepper
            activeStep={activeStep}
            lineClassName=""
            activeLineClassName=""
          >
            {amount?.map((money, idx) => (
              <Step
                key={money}
                className="h-4 w-4 cursor-pointer"
                activeClassName="ring-0 bg-blue-700"
                completedClassName=""
                onClick={() => {
                  setActiveStep(idx);
                  setInitialDeposit(money);
                }}
              >
                <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                  <Typography variant="h6" color="black">
                    $ {money}
                  </Typography>
                </div>
              </Step>
            ))}
            {/* <Step
              className="h-4 w-4 cursor-pointer"
              activeClassName="ring-0"
              completedClassName=""
              onClick={() => setActiveStep(1)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="black">
                  $ 1500
                </Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 cursor-pointer"
              activeClassName="ring-0 "
              completedClassName=""
              onClick={() => setActiveStep(2)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="black">
                  $ 2250
                </Typography>
              </div>
            </Step>
            <Step
              className="h-4 w-4 cursor-pointer"
              activeClassName="ring-0 "
              completedClassName=""
              onClick={() => setActiveStep(3)}
            >
              <div className="absolute -bottom-[2.3rem] w-max text-center text-xs">
                <Typography variant="h6" color="black">
                  $ 3000
                </Typography>
              </div>
            </Step> */}
          </Stepper>
        </div>
      </CardHeader>
    </div>
  );
}
