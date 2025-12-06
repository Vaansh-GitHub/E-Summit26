import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthUserContext';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

const Page = () => {
  const { authUser, loading, signInwithGoogle, userRole } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && authUser && userRole !== null) {

      if (userRole === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/store", { replace: true });
      }
    }
  }, [loading, authUser, userRole, navigate]);

  if (loading) return <Loading/>;

  return (
    <div>
      <h1>REGISTER</h1>
      <button onClick={() => signInwithGoogle()}>Sign In with Google</button>
    </div>
  );
};

export default Page;
