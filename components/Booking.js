import React, { useState } from "react";
import Image from "next/image";

export default function Booking() {
  const [step, setStep] = useState(1);
  return (
    <div className="bg-[url('../public/booking-bg.svg')] bg-cover min-h-screen flex-col items-center justify-center  p-12 ">
      <div className="w-full flex justify-center items-center">
        <div className="bg-white rounded-lg max-h-[600px] min-h-fit min-w-[700px] max-w-[700px] shadow-2xl p-10 space-y-5">
          <div className="border-b border-gray-400 pb-5">
            {step <= 2 && (
              <>
                <p className="text-primary font-bold text-3xl">
                  What type of property you have?
                </p>
              </>
            )}
            {step > 2 && (
              <>
                <p className="text-primary font-bold text-3xl">
                  Select Service
                </p>
                <p className="text-gray-500 text-xl">
                  Select from one of the Categories & Choose your Service
                </p>
              </>
            )}
          </div>

          <div className="max-h-[400px] overflow-scroll space-y-5 scrollbar-hidden">
            <div className="flex justify-between items-center p-3 border border-gray-300 hover:border-primary hover:opacity-50 hover:cursor-pointer space-x-10 rounded-xl">
              <Image
                src={"/images/DJI_0373.jpg"}
                width={40}
                height={40}
                alt="Photo"
                className="h-16 w-20 overflow-hidden rounded-lg"
              />
              <div className="flex justify-between place-items-center w-full">
                <p className="text-black font-bold text-lg">
                  Residential Property
                </p>
                <p className="text-gray-500">9 Services</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 border border-gray-300 hover:border-primary hover:opacity-50 hover:cursor-pointer space-x-10 rounded-xl">
              <Image
                src={"/images/DJI_0373.jpg"}
                width={40}
                height={40}
                alt="Photo"
                className="h-16 w-20 overflow-hidden rounded-lg"
              />
              <div className="flex justify-between place-items-center w-full">
                <p className="text-black font-bold text-lg">
                  Residential Property
                </p>
                <p className="text-gray-500">9 Services</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-3 border border-gray-300 hover:border-primary hover:opacity-50 hover:cursor-pointer space-x-10 rounded-xl">
              <Image
                src={"/images/DJI_0373.jpg"}
                width={40}
                height={40}
                alt="Photo"
                className="h-16 w-20 overflow-hidden rounded-lg"
              />
              <div className="flex justify-between place-items-center w-full">
                <p className="text-black font-bold text-lg">
                  Residential Property
                </p>
                <p className="text-gray-500">9 Services</p>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              {step > 1 ? (
                <p className="text-black font-bold ">Questions?</p>
              ) : (
                <span />
              )}
              <div className="bg-primary rounded-lg px-4 py-2 cursor-pointer hover:opacity-90">
                <p className="text-white font-bold ">Next</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-400 py-5">
            <p className="text-black font-bold ">Questions?</p>
            <p className="text-black  ">Call (866)-868-1990 for help</p>
          </div>
        </div>
      </div>

      <div className="w-full flex-col justify-end items-end space-y-1 mt-20 ">
        <p className="text-black font-bold text-xs text-right">
          TERMS & CONDITIONS:
        </p>
        <p className="text-black font-bold text-xs text-right">
          – You will be automatically subscribed to our email notification for
          updates about your appointments.
        </p>
        <p className="text-black font-bold text-xs text-right">
          – We ask that you please reschedule or cancel 72h prior to the
          beginning of your appointment or you may be charged a cancellation fee
          of 50% of the cost of your service.
        </p>
        <p className="text-black font-bold text-xs text-right">
          – FREE Rescheduling due to weather conditions.
        </p>
        <p className="text-black font-bold text-xs text-right">
          *- Rescheduling/Cancellation must be made 72h prior to the appointment
          to avoid reschedule fee charges.
        </p>

        <p className="text-black font-bold text-xs text-right">
          *- Marked “No Show” Appointments are not refundable.
        </p>
        <p className="text-black font-bold text-xs text-right">
          – We ask that you please reschedule or cancel 72h prior to the
          beginning of your appointment or you may be charged a cancellation fee
          of 50% of the cost of your service.
        </p>
        <p className="text-black font-bold text-xs text-right">
          *- Locations that do not meet Health & Safety Requirements a Fee of
          $299 will apply.
        </p>
      </div>
    </div>
  );
}
