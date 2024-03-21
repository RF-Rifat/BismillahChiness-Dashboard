/* eslint-disable react/prop-types */
import { Chip, Card } from "@material-tailwind/react";

const UserAcc = ({ userAcc }) => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="px-3 mt-6 md:flex-none">
          <div className="relative flex flex-col break-words border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
            <div className="flex-auto p-4">
              <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-8">
                {userAcc?.length > 0 &&
                  userAcc?.map((item) => (
                    <>
                      <Card className="rounded-3xl p-8 ring-1 xl:p-10 ring-[#5a9bdd] w-full">
                        <h3
                          id="tier-freelancer"
                          className="text-lg font-semibold leading-8 text-[#5a9bdd]"
                        >
                          {item?.name}
                        </h3>
                        <p className="mt-4 text-base leading-6 text-green-600">
                          Account Id: {item?.accountId}
                        </p>
                        <p className="mt-4 text-base leading-6 text-green-600">
                          Account Type: {item?.accountType}
                        </p>
                        <h3
                          id="tier-freelancer"
                          className="text-lg font-semibold mt-5 leading-8 text-[#5a9bdd]"
                        >
                          Date:
                          {new Date(item?.createdAt).toLocaleString("en-US", {
                            timeZone: "Asia/Dhaka",
                          })}
                        </h3>
                        <p className="mt-6 flex items-baseline gap-x-1">
                          {/* Price, update based on frequency toggle state */}
                          <span className="text-3xl font-bold tracking-tight text-primary">
                            Balance: ${item?.balance}
                          </span>
                        </p>
                        <div className="mt-6 rounded-md inline-block text-center text-sm font-semibold shadow-sm">
                          {item?.status === "pending" ? (
                            <Chip
                              color="blue"
                              className="py-3"
                              value="pending"
                              size="sm"
                            />
                          ) : item?.status === "approved" ? (
                            <Chip
                              color="green"
                              className="py-3"
                              value="Accepted"
                              size="sm"
                            />
                          ) : (
                            <Chip
                              color="red"
                              className="py-3"
                              value="declined"
                              size="sm"
                            />
                          )}
                        </div>
                      </Card>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAcc;
