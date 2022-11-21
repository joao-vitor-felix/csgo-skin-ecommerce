import { useState } from "react";
import Directory from "./components/Directory/Directory";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "AK-47",
      imageUrl: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhhwszHeDFH6OO6nYeDg7mtYbiJkjoDvcAlj7yVotmtjAfjrkpoZW36IoaWclM3MFnY8lK9k-vnm9bi67lSw9Es",
    },

    {
      id: 2,
      title: "M4A1-S",
      imageUrl: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uOxh7-Gw_alDK3UhH9Y78pOh-zF_Jn4xgbg_kVuam7wJoDAcgQ5MFzVrlO-lOrqhpO_7puazXFhuCgj5H-LzUepwUYbGxqtFjQ",
    },
    {
      id: 3,
      title: "AWP",
      imageUrl: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5cyzhr-GkvP9Jrafw2lU6ccp0rqX8d2nigTm_hdoNWmiIYHBdAVsaAzR-QO-xLq6g5G5uIOJlyWELqSUrQ",
    },
    {
      id: 4,
      title: "Knifes",
      imageUrl: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPD1PrbQqW9e-NV9j_v-5YT0m1HllB81NDG3OobHdVJqYw2C-FTox-fshse-7pSamCZi6HZz5SzezEHm0k0ab-FtgPWACQLJ_leCpCU",
    },
  ];
  return (
    <>
      <Directory categories={categories} />
    </>
  );
};

export default App;
