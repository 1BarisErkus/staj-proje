import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session || session.user?.email !== "admin@gmail.com") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

const AdminPage = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
    </div>
  );
};

export default AdminPage;
