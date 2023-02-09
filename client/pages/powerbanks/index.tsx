import { useState } from "react";
import { devicesApi } from "../../API/devices";
import { DevicesPageLayout, MainLayout } from "../../layouts";
import { IDevice } from "../../models/IDevice";
import { wrapper } from "../../store";

interface DevicesProps {
  serverDevices: IDevice[];
}

const Powerbanks: React.FC<DevicesProps> = ({serverDevices}) => {
	const [devices, setDevices] = useState<IDevice[]>(serverDevices);

  return (
    <>
      <MainLayout>
				<DevicesPageLayout title="Повербанки" devices={devices} />
      </MainLayout>
    </>
  );
}

export default Powerbanks;

export const getServerSideProps = wrapper.getServerSideProps(
  () =>
    async ({ params }) => {
      const response = await devicesApi.getDevices(5);
      return {
        props: {
          serverDevices: response,
        },
      };
    }
);
