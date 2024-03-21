import useAuth from "../../Hooks/useAuth";

const Invoice = () => {
  const handlePrint = () => {
    window.print();
  };
  const { authInfo } = useAuth();
  const { displayName, photoURL } = authInfo?.user || {};
  return (
    <>
      <div className="w-full max-w-full px-3 mx-auto sm:flex-0 shrink-0 sm:w-10/12 md:w-8/12">
        <form action="index.html" method="post">
          <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border sm:my-12">
            <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 text-center">
              <div className="flex flex-wrap justify-between -mx-3">
                <div className="w-full max-w-full px-3 text-left md:flex-0 shrink-0 md:w-4/12">
                  <img
                    className="block w-1/4 p-2 mb-2 dark:hidden"
                    src="/logo.png"
                    alt="Logo"
                  />

                  <h6 className="dark:text-white">
                    Fayej Mansion,Chawk Bazar,Dhaka
                  </h6>
                  <p className="block text-slate-400 dark:text-white dark:opacity-80">
                    tel: +1010101010
                  </p>
                </div>
                <div className="w-full max-w-full px-3 mt-12 text-left md:flex-0 shrink-0 md:w-7/12 md:text-right lg:w-3/12">
                  <h6 className="block mt-2 mb-0 dark:text-white">
                    Billed to: {displayName}
                  </h6>
                  <p className="text-slate-400 dark:text-white dark:opacity-80">
                    Shahi Maszid
                    <br />
                    Dinajpur
                  </p>
                </div>
              </div>
              <br />
              <div className="flex flex-wrap -mx-3 md:justify-between">
                <div className="w-full max-w-full px-3 mt-auto md:flex-0 shrink-0 md:w-4/12">
                  <h6 className="mb-0 text-left text-slate-400 dark:text-white dark:opacity-80">
                    Invoice no
                  </h6>
                  <h5 className="mb-0 text-left dark:text-white">#0453119</h5>
                </div>
                <div className="w-full max-w-full px-3 mt-auto md:flex-0 shrink-0 md:w-7/12 lg:w-5/12">
                  <div className="flex flex-wrap mt-6 -mx-3 text-left md:mt-12 md:text-right">
                    <div className="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                      <h6 className="mb-0 text-slate-400 dark:text-white dark:opacity-80">
                        Invoice date:
                      </h6>
                    </div>
                    <div className="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                      <h6 className="mb-0 text-slate-700 dark:text-white">
                        16/02/2024
                      </h6>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 text-left md:text-right">
                    <div className="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                      <h6 className="mb-0 text-slate-400 dark:text-white dark:opacity-80">
                        Due date:
                      </h6>
                    </div>
                    <div className="w-full max-w-full px-3 md:flex-0 shrink-0 md:w-6/12">
                      <h6 className="mb-0 text-slate-700 dark:text-white">
                        11/03/2024
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-auto p-6">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 flex-0">
                  <div className="overflow-x-auto rounded-t-xl ps">
                    <table className="w-full mb-4 align-top border-collapse border-gray-200 text-slate-500 dark:border-white/40">
                      <thead className="text-white align-bottom bg-slate-700 dark:bg-slate-700">
                        <tr>
                          <th
                            scope="col"
                            className="px-2 py-3 font-semibold text-left capitalize bg-transparent border-b border-solid shadow-none tracking-none whitespace-nowrap border-b-gray-200 dark:border-white/40 dark:text-white"
                          >
                            Item
                          </th>
                          <th
                            scope="col"
                            className="px-2 py-3 pl-6 font-semibold capitalize bg-transparent border-b border-solid shadow-none tracking-none whitespace-nowrap border-b-gray-200 dark:border-white/40 dark:text-white"
                          >
                            Qty
                          </th>
                          <th
                            scope="col"
                            className="px-2 py-3 pl-6 font-semibold capitalize bg-transparent border-b border-solid shadow-none tracking-none whitespace-nowrap border-b-gray-200 dark:border-white/40 dark:text-white"
                            colSpan={2}
                          >
                            Rate
                          </th>
                          <th
                            scope="col"
                            className="px-2 py-3 pl-6 font-semibold capitalize bg-transparent border-b border-solid shadow-none tracking-none whitespace-nowrap border-b-gray-200 dark:border-white/40 dark:text-white"
                          >
                            Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border-t-2">
                        <tr>
                          <td className="p-2 text-left border-b whitespace-nowrap dark:border-white/40 dark:text-white/60">
                            Send Money
                          </td>
                          <td className="p-2 pl-6 border-b whitespace-nowrap dark:border-white/40 dark:text-white/60">
                            1
                          </td>
                          <td
                            className="p-2 pl-6 border-b whitespace-nowrap dark:border-white/40 dark:text-white/60"
                            colSpan={2}
                          >
                            $ 9.00
                          </td>
                          <td className="p-2 pl-6 border-b whitespace-nowrap dark:border-white/40 dark:text-white/60">
                            $ 9.00
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 text-left border-b whitespace-nowrap dark:border-white/40 dark:text-white/60">
                            Credit Card
                          </td>
                          <td className="p-2 pl-6 border-b whitespace-nowrap dark:border-white/40 dark:text-white/60">
                            3
                          </td>
                          <td
                            className="p-2 pl-6 border-b whitespace-nowrap dark:border-white/40 dark:text-white/60"
                            colSpan={2}
                          >
                            $ 100.00
                          </td>
                          <td className="p-2 pl-6 border-b whitespace-nowrap dark:border-white/40 dark:text-white/60">
                            $ 300.00
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 text-left border-b-0 whitespace-nowrap dark:border-white/40 dark:text-white/60">
                            Loan service
                          </td>
                          <td className="p-2 pl-6 border-b-0 whitespace-nowrap dark:border-white/40 dark:text-white/60">
                            1
                          </td>
                          <td
                            className="p-2 pl-6 border-b-0 whitespace-nowrap dark:border-white/40 dark:text-white/60"
                            colSpan={2}
                          >
                            $ 89.00
                          </td>
                          <td className="p-2 pl-6 border-b-0 whitespace-nowrap dark:border-white/40 dark:text-white/60">
                            $ 89.00
                          </td>
                        </tr>
                      </tbody>
                      <tfoot className="border-t border-solid">
                        <tr>
                          <th className="p-2 font-semibold bg-transparent border-b shadow-none whitespace-nowrap dark:border-white/40 dark:text-white/60" />
                          <th className="p-2 font-semibold bg-transparent border-b shadow-none whitespace-nowrap dark:border-white/40 dark:text-white/60" />
                          <th
                            className="p-2 pl-6 mt-0 mb-2 text-xl font-semibold leading-snug bg-transparent border-b shadow-none whitespace-nowrap text-slate-700 dark:border-white/40 dark:text-white/60"
                            colSpan={2}
                          >
                            Total
                          </th>
                          <th
                            className="p-2 pl-6 mt-0 mb-2 text-xl font-semibold leading-snug bg-transparent border-b shadow-none whitespace-nowrap text-slate-700 dark:border-white/40 dark:text-white/60"
                            colSpan={1}
                          >
                            $ 698
                          </th>
                        </tr>
                      </tfoot>
                    </table>
                    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                      <div
                        className="ps__thumb-x"
                        tabIndex={0}
                        style={{ left: 0, width: 0 }}
                      />
                    </div>
                    <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                      <div
                        className="ps__thumb-y"
                        tabIndex={0}
                        style={{ top: 0, height: 0 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-black/12.5 mt-6 rounded-b-2xl border-t-0 border-solid p-6 md:mt-12">
              <div className="flex flex-wrap -mx-3">
                <div className="w-full max-w-full px-3 text-left lg:flex-0 shrink-0 lg:w-5/12">
                  <h5 className="dark:text-white">Thank you!</h5>
                  <p className="text-sm leading-normal text-slate-400 dark:text-white dark:opacity-80">
                    If you encounter any issues related to the invoice you can
                    contact us at:
                  </p>
                  <h6 className="mb-0 text-slate-400 dark:text-white dark:opacity-80">
                    email:
                    <span className="text-blue-700 dark:text-white">
                      support@securesavingsbank.com
                    </span>
                  </h6>
                </div>
                <div className="w-full max-w-full px-3 mt-4 lg:flex-0 shrink-0 md:mt-0 md:text-right lg:w-7/12">
                  <button
                    onClick={handlePrint} // Call handlePrint function when button is clicked
                    type="button"
                    className="inline-block px-5 py-2.5 mb-0 text-sm font-bold leading-normal text-right text-white align-middle transition-all ease-in bg-blue-500 border-0 rounded-lg shadow-md cursor-pointer hover:-translate-y-px active:opacity-85 hover:shadow-xs tracking-tight-rem bg-150 bg-x-25 lg:mt-24"
                  >
                    Print
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Invoice;
