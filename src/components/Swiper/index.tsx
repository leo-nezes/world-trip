import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

import { SwiperLink } from './SwiperLink';

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

interface ContinentData {
  name: string;
  description: string;
  image: string;
}

SwiperCore.use([Navigation, Pagination]);

export function Swiper() {
  const styles = {
    swiper: {
      width: '100%',
      height: '450px',
    }
  }

  const continents: ContinentData[] = [
    {
      name: 'América do Norte',
      description: 'O segundo maior continente.',
      image: 'https://images.unsplash.com/photo-1545332042-429d9758c058?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFkeSUyMGxpYmVydHl8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'América do Sul',
      description: 'As línguas mais faladas são o espanhol e português.',
      image: 'https://images.unsplash.com/photo-1547212543-d8d490fecd7c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHJpbyUyMGRlJTIwamFuZWlyb3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Ásia',
      description: 'Contém o país mais populoso do mundo - a China.',
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8amFwYW58ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'África',
      description: 'Possui o maior deserto do mundo - Saara',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9zdGNhcmQlMjBhZnJpY2F8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      name: 'Europa',
      description: 'O continente mais antigo.',
      image: 'https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=770&q=80',
    },
    {
      name: 'Oceania',
      description: 'O menor continente do mundo.',
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXVzdHJhbGlhfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    }
  ]

  return(
    <SwiperContainer
      style={styles.swiper}
      spaceBetween={30}
      hashNavigation={{"watchState": true}}
      pagination={{"clickable": true}}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
    >
      {/* Previous and Next buttons */}
      <div style={{ color: '#FFBA08' }} className="swiper-button-prev"></div>
      <div style={{ color: '#FFBA08' }} className="swiper-button-next"></div>

      {continents.map((continent, index) => {
        return(
          <SwiperSlide
            key={`slide${index}`}
            data-hash="slide1"
            style={{
              background: `url(${continent.image}) no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <SwiperLink 
              name={continent.name}
              description={continent.description}
            />
          </SwiperSlide>
        );
      })}
    </SwiperContainer>
  );
}