import React, { useState, useEffect } from 'react';

const Star: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('https://swapi.dev/api/');
        const json = await response.json();

        if (!response.ok) {
          throw new Error(json.message);
        }

        setData(json);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: broken code</div>;
  }

  if (!data) {
    return null;
  }

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Star;
