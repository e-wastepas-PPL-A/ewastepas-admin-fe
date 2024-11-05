import { Card } from "flowbite-react";

export function CardTWP() {
  return (
    <div className="flex gap-10">
      <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Dropbox Setiabudhi
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          120 Electronics Waste
        </p>
      </Card>

      <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Dropbox Sukajadi
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          56 Electronics Waste
        </p>
      </Card>

      <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Dropbox Dago
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          119 Electronics Waste
        </p>
      </Card>
    </div>
  );
}
