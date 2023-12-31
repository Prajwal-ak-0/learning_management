
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns } from "./_components/Column";
import { DataTable } from "./_components/DataTable";

async function getData(): Promise<any[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ];
}

const CoursesPage =async () => {
    const data = await getData()

  return (
    <div className="p-6">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default CoursesPage;
