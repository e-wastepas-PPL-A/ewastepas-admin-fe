import { Card } from "flowbite-react";

export function CardTWP() {
  return (
    <div className="flex gap-10">
      <Card href="#" className="w-60 h-32 flex flex-col justify-center items-center max-w-sm">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Dropbox Setiabudhi
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          120 Electronics Waste
        </p>
      </Card>

      <Card href="#" className="w-60 h-32 flex flex-col justify-center items-center max-w-sm">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Dropbox Sukajadi
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          56 Electronics Waste
        </p>
      </Card>

      <Card href="#" className="w-60 h-32 flex flex-col justify-center items-center max-w-sm">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Dropbox Dago
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          119 Electronics Waste
        </p>
      </Card>

      <Card href="#" className="w-60 h-32 flex flex-col justify-center items-center max-w-sm">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Dropbox Cihampelas
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          27 Electronics Waste
        </p>
      </Card>
    </div>
  );
}
