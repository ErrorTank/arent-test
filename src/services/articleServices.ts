import { Article } from "../type/article";
import column2 from "../assets/column-2 (image).png";

const CATEGORIES = ["COLUMN", "DIET", "BEAUTY", "HEALTH"] as const;
export type ArticleCategory = (typeof CATEGORIES)[number];

const articleServices = {
  getArticles: async (
    page: number = 0,
    limit: number = 8,
    category?: ArticleCategory
  ): Promise<{
    articles: Article[];
    hasMore: boolean;
  }> => {
    const mockArticles: Article[] = [
      {
        id: "1",
        title: "魚を食べて頭もカラダも元気に！",
        description: "知っておきたい魚を食べるメリットとは？",
        date: "2021.05.17",
        time: "23:25",
        category: "COLUMN",
        imageUrl: column2,
        tags: ["魚料理", "和食", "DHA"],
      },
      {
        id: "2",
        title: "魚を食べて頭もカラダも元気に！",
        description: "知っておきたい魚を食べるメリットとは？",
        date: "2021.05.17",
        time: "23:25",
        category: "DIET",
        imageUrl: column2,
        tags: ["魚料理", "和食", "DHA"],
      },
      {
        id: "3",
        title: "魚を食べて頭もカラダも元気に！",
        description: "知っておきたい魚を食べるメリットとは？",
        date: "2021.05.17",
        time: "23:25",
        category: "BEAUTY",
        imageUrl: column2,
        tags: ["魚料理", "和食", "DHA"],
      },
      {
        id: "4",
        title: "魚を食べて頭もカラダも元気に！",
        description: "知っておきたい魚を食べるメリットとは？",
        date: "2021.05.17",
        time: "23:25",
        category: "HEALTH",
        imageUrl: column2,
        tags: ["魚料理", "和食", "DHA"],
      },
      {
        id: "5",
        title: "魚を食べて頭もカラダも元気に！",
        description: "知っておきたい魚を食べるメリットとは？",
        date: "2021.05.17",
        time: "23:25",
        category: "COLUMN",
        imageUrl: column2,
        tags: ["魚料理", "和食", "DHA"],
      },
      {
        id: "6",
        title: "魚を食べて頭もカラダも元気に！",
        description: "知っておきたい魚を食べるメリットとは？",
        date: "2021.05.17",
        time: "23:25",
        category: "DIET",
        imageUrl: column2,
        tags: ["魚料理", "和食", "DHA"],
      },
      {
        id: "7",
        title: "魚を食べて頭もカラダも元気に！",
        description: "知っておきたい魚を食べるメリットとは？",
        date: "2021.05.17",
        time: "23:25",
        category: "BEAUTY",
        imageUrl: column2,
        tags: ["魚料理", "和食", "DHA"],
      },
      {
        id: "8",
        title: "魚を食べて頭もカラダも元気に！",
        description: "知っておきたい魚を食べるメリットとは？",
        date: "2021.05.17",
        time: "23:25",
        category: "HEALTH",
        imageUrl: column2,
        tags: ["魚料理", "和食", "DHA"],
      },
    ];

    return {
      articles: mockArticles,
      hasMore: true,
    };
  },
};

export default articleServices;
