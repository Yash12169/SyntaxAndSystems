"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";

const SpringModal = ({
  isOpen,
  setIsOpen,
  red,
}: {
  isOpen: boolean,
  setIsOpen: (value: boolean) => void,
  red:boolean,
}) => {
 

    if(red){
        return (
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: "12.5deg" }}
                    animate={{ scale: 1, rotate: "0deg" }}
                    exit={{ scale: 0, rotate: "0deg" }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-red-500 text-primary-content p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                  >
                    <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                    <div className="relative z-10">
                      <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-red-500 grid place-items-center mx-auto">
                        <FiAlertCircle />
                      </div>
                      <h3 className="text-3xl font-bold text-center text-white mb-2">
                        Incorrect Email
                      </h3>
                      <p className="text-center mb-6 text-white">
                            Please enter a valid email
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setIsOpen(false)}
                          className="btn  btn-base-100 font-semibold w-full py-2 rounded"
                        >
                          Ok
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          );
    }
    if(!red){
        return (
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                  className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: "12.5deg" }}
                    animate={{ scale: 1, rotate: "0deg" }}
                    exit={{ scale: 0, rotate: "0deg" }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-primary text-primary-content p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                  >
                    <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                    <div className="relative z-10">
                      <div className="bg-primary-content w-16 h-16 mb-2 rounded-full text-3xl text-primary grid place-items-center mx-auto">
                        <FiAlertCircle />
                      </div>
                      <h3 className="text-3xl font-bold text-center mb-2">
                        Signup Successful
                      </h3>
                      <p className="text-center mb-6">
                        Thank you for signing up for my newsletter, check your inbox for
                        regular updates.
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setIsOpen(false)}
                          className="btn  btn-base-100 font-semibold w-full py-2 rounded"
                        >
                          Understood!
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          );
    }
};

export default SpringModal;
