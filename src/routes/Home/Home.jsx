import { CategoryItemList } from '../../components/CategoryItemList/CategoryItemList';

export const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'AK-47',
      imageUrl:
        'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhh3szKcDBA49OJnpWFkPvxDLfYkWNF18lwmO7Eu9Wti1Dk-UA5aj3xJoaSI1I5Z12C_FG-k-znhJW5vs6bmndjuiki4H7D30vgYDi_Mc0/360fx360f',
    },

    {
      id: 2,
      title: 'M4A1-S',
      imageUrl:
        'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alIITBhGJf_NZlmOzA-LP5gVO8v11lajzwIIbGcFNrNVjQqFS6lLu5gJW-vMudz3E2uiArsyyIy0Cx0kkZcKUx0mwdWFWI',
    },
    {
      id: 3,
      title: 'AWP',
      imageUrl:
        'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJU5cyzhr-GkvP9Jrafw2lU6ccp0rqX8d2nigTm_hdoNWmiIYHBdAVsaAzR-QO-xLq6g5G5uIOJlyWELqSUrQ',
    },
    {
      id: 4,
      title: 'USP-S',
      imageUrl:
        'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jkIbLfgnhF-sBwh9bN_Iv9nBrtrUY-MD33co-RJlQ9NVHW_wO9k-y6gsW_7cyanHZkunUr4XnbnB23n1gSOU78gfTH',
    },

    {
      id: 5,
      title: 'Glock-18',
      imageUrl:
        'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJkZmOlPj6J7rSglRd4cJ5nqfH99us0Ayw-hdvN2ClcoeQe1A2YAzTqVHqyL_t0Mfv7pTOzydhsiQg-z-DyG7C7dXc',
    },

    {
      id: 6,
      title: 'Gloves',
      imageUrl:
        'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAX1R3LjtQurWzLhRfwP_BcjZ9_NC3nYS0h-LmI7fUqWZU7Mxkh6eU99uh0VWxrURvMmGnIYHDelBqZwvV-FfvkOy9gce_vZ6fzyZk7yUi-z-DyDt6vfob',
    },
    {
      id: 7,
      title: 'Knifes',
      imageUrl:
        'https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GGqPD1PrbQqW9e-NV9j_v-5YT0m1HllB81NDG3OobHdVJqYw2C-FTox-fshse-7pSamCZi6HZz5SzezEHm0k0ab-FtgPWACQLJ_leCpCU',
    },
  ];
  return (
    <>
      <CategoryItemList categories={categories} />
    </>
  );
};
