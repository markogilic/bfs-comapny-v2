'use client';
import { useState, useEffect } from 'react';
import CarouselTempate from '../template/CarouselTempate';
import Image from 'next/image';
import { UseScreenWidth } from '@/app/hooks/screen-width';

interface InstaItem {
  mediaUrl: string;
  permalink: string;
}

const InstagramPost = () => {
  const width = UseScreenWidth();
  const [instaItems, setInstaItems] = useState<InstaItem[]>([]);
  const userId = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_ID;
  const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;
  const instaUrl = `https://graph.instagram.com/${userId}/media?access_token=${accessToken}`;

  useEffect(() => {
    const featcMedia = async (id: string) => {
      const mediaUrl = `https://graph.instagram.com/${id}?access_token=${accessToken}&fields=media_url,permalink`;

      const res = await fetch(mediaUrl);
      const json = await res.json();

      const instaItem: InstaItem = {
        permalink: json.permalink,
        mediaUrl: json.media_url,
      };

      return instaItem;
    };

    const doFeatc = async () => {
      if (!userId || !accessToken) {
        console.error('Instagram access token or user id is missing');
        return;
      }

      const res = await fetch(instaUrl);
      const json = (await res.json()).data;

      const featcedItems: InstaItem[] = [];
      for (let i = 0; i < json.length && i < 8; i++) {
        const item = json[i];
        const itemId = item.id;

        const instaItem = await featcMedia(itemId);
        featcedItems.push(instaItem);
      }
      if (featcedItems.length > 0) {
        const excludeFeatcedItems = featcedItems.filter(
          (item) => !item.mediaUrl.includes('mp4')
        );
        setInstaItems(excludeFeatcedItems);
      }
    };
    doFeatc();
  }, [instaUrl, accessToken, userId]);

  return (
    <div className="md:py-[96px] md:w-[1140px] py-12  w-full mx-auto">
      <a
        href="https://www.instagram.com/bfs_company/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2 className="text-center text-4xl font-bold mb-[48px]">
          @bfs_company
        </h2>
      </a>
      <CarouselTempate toShow={width < 768 ? 1 : 4} customeDots={true}>
        {instaItems?.map((item: InstaItem, index: number) => (
          <div
            className="md:w-[269px] md:h-[269px]  px-8 md:px-2 rounded-md  overflow-hidden"
            key={index}
          >
            {/* <Image
              src={item.mediaUrl}
              alt="Instagram post"
              width={267}
              height={267}
            /> */}
            <a target="_blank" href={item.permalink} rel="noopener noreferrer">
              <Image
                src={item.mediaUrl}
                alt="Instagram post"
                width={width < 768 ? width : 367}
                height={367}
              />
            </a>
          </div>
        ))}
      </CarouselTempate>
    </div>
  );
};

export default InstagramPost;
