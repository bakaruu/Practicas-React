import { useState, useEffect } from "react";

export interface Weather {
  city: string;
  country: string;
  temp: string;
  icon: string;
  conditionText: string;
}

interface Return {
  weather: Weather | null;
  loading: boolean;
  error: string | null;
  fetchByCity: (city: string) => void;
}

const API = `https://api.weatherapi.com/v1/current.json?key=${
  import.meta.env.VITE_API_KEY
}&q=`;

export default function useWeather(): Return {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ---------- efectos ---------- */
  useEffect(() => {
    if (!city) return;                       // no ciudad ⇒ no llamada

    const fetchData = async () => {          // ← función asíncrona interior
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(API + encodeURIComponent(city));
        const data = await res.json();

        if (data.error) throw new Error(data.error.message);

        setWeather({
          city: data.location.name,
          country: data.location.country,
          temp: data.current.temp_c,
          icon: data.current.condition.icon,
          conditionText: data.current.condition.text,
        });
      } catch (err: any) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();                              // ejecuta la función
  }, [city]);                                 // ← se re-ejecuta al cambiar city

  const fetchByCity = (c: string) => setCity(c.trim());

  return { weather, loading, error, fetchByCity };
}
