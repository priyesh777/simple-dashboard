import { useEffect, useState } from "react";
import {
    Card,
    List,
    ListItem,
    Icon,
    Text,
    Bold,
    Flex,
    Title,
    ColGrid,
} from "@tremor/react";
import {
    HiBriefcase,
} from "react-icons/hi";
import styles from './DashWeather.module.scss';

interface ArticleDataArray extends Array<ArticleData> { }

interface ArticleData {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    urlToImage: string;
}


function DashNewsFeed() {
    const [articles, setArticles] = useState<ArticleDataArray>([]);

    useEffect(() => {
        const fetchNews = async () => {
            const apiKey = "d244e23c11934874aba112cfe52cda46";
            const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setArticles(data.articles.slice(0, 3));
            } catch (error) {
                console.error("Failed to fetch news", error);
            }
        };

        fetchNews();
    }, []);

    console.log("The News Article data::>>", articles);


    return (
        <Card maxWidth="max-w-3xl" decoration="top" decorationColor="blue">
            <Title>News Feed API</Title>
            <ColGrid numColsSm={1} numColsLg={1}>
                {articles.map((item) => (
                    <div >
                        <Title>{item.title}</Title>
                        <Text>{item.author}</Text>
                        <List marginTop="mt-4">
                            <ListItem key={item.content}>
                                <Flex
                                    justifyContent="justify-start"
                                    truncate={true}
                                    spaceX="space-x-4"
                                >
                                    <Icon
                                        variant="light"
                                        icon={HiBriefcase}
                                        size="md"
                                        color={"sky"}
                                    />
                                    <div style={{ marginTop: ".9rem" }}>
                                        <Text truncate={true}>
                                            <Bold>{item.source.id}</Bold>
                                        </Text>
                                        <Text truncate={true}>
                                            {item.source.name}
                                        </Text>
                                    </div>
                                </Flex>
                            </ListItem>
                        </List>
                    </div>
                )).slice(0, 2)}
            </ColGrid>
        </Card>
    );
}

export default DashNewsFeed;
