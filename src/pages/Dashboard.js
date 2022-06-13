import { Button } from "@mantine/core";
import { DashboardLayout } from "../utils/layouts";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Button onClick={() => console.log("hello")}>test</Button>
    </DashboardLayout>
  );
};

export default Dashboard;
