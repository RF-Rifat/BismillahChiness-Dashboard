import { useState, useEffect } from "react";

const BatteryStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState("Unknown");
  const [batteryCharging, setBatteryCharging] = useState("Unknown");

  useEffect(() => {
    const batteryStatus = () => {
      navigator.getBattery().then(function (battery) {
        updateBatteryStatus(battery);

        battery.addEventListener("levelchange", function () {
          updateBatteryStatus(battery);
        });

        battery.addEventListener("chargingchange", function () {
          updateBatteryStatus(battery);
        });
      });
    };

    batteryStatus();

    return () => {
      // Clean up event listeners
      navigator.getBattery().then(function (battery) {
        battery.removeEventListener("levelchange", updateBatteryStatus);
        battery.removeEventListener("chargingchange", updateBatteryStatus);
      });
    };
  }, []);

  const updateBatteryStatus = (battery) => {
    setBatteryLevel((battery.level * 100).toFixed(2) + "%");
    setBatteryCharging(battery.charging ? "Yes" : "No");
  };

  return (
    <div className="p-4 rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Battery Status</h2>
      <div className="flex justify-between items-center">
        <div className="w-20 h-10 border border-gray-300 rounded-lg overflow-hidden">
          <div
            className="h-full bg-green-500"
            style={{ width: batteryLevel }}
          ></div>
        </div>
        <div>
          <p className="mb-2">
            Battery Level: <span className="font-semibold">{batteryLevel}</span>
          </p>
          <p>
            Charging: <span className="font-semibold">{batteryCharging}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BatteryStatus;
