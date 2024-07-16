import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *---Logo
 *--- Nav items
 * Body
 * --Search
 * --RestaurantContainer
 * --RestaurantCard
 * Footer
 * --Copyright
 * --Links
 * --Address
 * --contact
 */

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, avgRating } = resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="res-card">
      <img
        className="rec-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
        alt=""
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} Minutes</h4>
    </div>
  );
};

const objList = [
  {
    info: {
      id: "13930",
      name: "Mataam Al Yamani",
      cloudinaryImageId: "omfpna6xpoepnzu38rky",
      locality: "Red Hills Road",
      areaName: "Redhills",
      costForTwo: "₹500 for two",
      cuisines: ["Arabian"],
      avgRating: 3.8,
      parentId: "1962",
      avgRatingString: "3.8",
      totalRatingsString: "5K+",
      promoted: true,
      adTrackingId:
        "cid=15011766~p=0~adgrpid=15011766#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=13930~eid=d93a2d16-7725-483f-873f-1ecf20471e7a~srvts=1720722428484~collid=45995",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-11 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=13930",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "13434",
      name: "Cafe 555 & Aqeeq Restaurant",
      cloudinaryImageId: "r5ayymu2bfkse9yt3w3b",
      locality: "Masab Tank",
      areaName: "Masab Tank",
      costForTwo: "₹300 for two",
      cuisines: ["Biryani", "Chinese"],
      avgRating: 4.3,
      parentId: "19138",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-11 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹50 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "10K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=13434",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "622195",
      name: "MOJO Pizza - 2X Toppings",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/295f1bfc-237b-4bd4-832b-a23fdf08f8aa_622195.JPG",
      locality: "Gumma Konda Colony",
      areaName: "Attapur",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
      avgRating: 4.3,
      parentId: "11329",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "15-25 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-12 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹179",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=622195",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "750389",
      name: "Daily Kitchen - Homely Meals",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/741d7d41-1341-4358-b6e0-cc22b8e82f9a_750389.JPG",
      locality: "GUMMA KONDA COLONY",
      areaName: "Attapur",
      costForTwo: "₹400 for two",
      cuisines: ["Home Food", "Indian", "North Indian", "Thalis"],
      avgRating: 4.1,
      parentId: "444382",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "15-25 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-12 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "options available",
                },
              },
            ],
          },
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹139",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=750389",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "681605",
      name: "LeanCrust Pizza- ThinCrust Experts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/23/e5e23da8-f5d8-4782-bbe2-a8b28f64cad0_681605.JPG",
      locality: "GUMMA KONDA COLONY",
      areaName: "Attapur",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Italian", "Desserts"],
      avgRating: 4.1,
      parentId: "11216",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      promoted: true,
      adTrackingId:
        "cid=15264652~p=1~adgrpid=15264652#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=681605~eid=470bccdf-d9fc-4b15-b138-30efc51183fb~srvts=1720722428484~collid=45995",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "20-30 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-12 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                },
              },
            ],
          },
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹189",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=681605",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "22260",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
      locality: "salar jung Colony",
      areaName: "Toli Chowki",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts"],
      avgRating: 4.2,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-12 05:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Ice-creams.png",
            description: "Delivery!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "Rxawards/_CATEGORY-Ice-creams.png",
                  description: "Delivery!",
                },
              },
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=22260",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "378344",
      name: "Theobroma",
      cloudinaryImageId: "63dd75492c47fcec191132b8eb299ea5",
      locality: "Banjara Hills",
      areaName: "Banjara Hills",
      costForTwo: "₹400 for two",
      cuisines: ["Desserts"],
      avgRating: 4.5,
      parentId: "1040",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 6.4,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "6.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-11 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.0",
          ratingCount: "100+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=378344",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "28108",
      name: "Al Rabea Al Arabi Cafeteria",
      cloudinaryImageId: "jnzmscxd37rbjmgciwt5",
      locality: "Mehdipatnam",
      areaName: "Mehdipatnam",
      costForTwo: "₹250 for two",
      cuisines: ["Arabian", "Lebanese"],
      avgRating: 4.4,
      parentId: "7582",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-12 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=28108",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "699984",
      name: "Blue Sea Hotel",
      cloudinaryImageId: "7d1095da1ce231831b22a5f0ddc43279",
      locality: "Gunfoundry",
      areaName: "Himayath Nagar",
      costForTwo: "₹450 for two",
      cuisines: ["Hyderabadi", "Snacks", "Seafood"],
      avgRating: 4.3,
      parentId: "418272",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-11 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=699984",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "454157",
      name: "Peshawar Restaurant",
      cloudinaryImageId: "e620464d92da252cc1ebcb3db6391d87",
      locality: "Lakdi-Ka-Pul",
      areaName: "Lakdi-Ka-Pul",
      costForTwo: "₹450 for two",
      cuisines: ["Indian", "Biryani"],
      avgRating: 4.1,
      parentId: "157401",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-12 01:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Mughlai.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mughlai.png",
                },
              },
            ],
          },
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "5K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=454157",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "738279",
      name: "Mehraab Restaurant",
      cloudinaryImageId: "64250274cf06f7be4e44e5626a2aeae3",
      locality: "Rajendra nagar",
      areaName: "Attapur",
      costForTwo: "₹300 for two",
      cuisines: ["Indian", "Chinese", "Mughlai"],
      avgRating: 4.3,
      parentId: "438394",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-11 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹90 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=738279",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "496680",
      name: "Shree Golden Palace Restaurant",
      cloudinaryImageId: "thhf5lvskkq8nxazkyqv",
      locality: "Mahesh Nagar",
      areaName: "Mehdipatnam",
      costForTwo: "₹250 for two",
      cuisines: ["briyani", "South Indian", "Indian", "North Indian"],
      avgRating: 4.1,
      parentId: "297690",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-12 01:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=496680",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "262087",
      name: "Imperial Multi-Cusine Restaurant",
      cloudinaryImageId: "rqlwvsmzcfxbg9u6ajgm",
      locality: "Banjara Hills",
      areaName: "Redhills",
      costForTwo: "₹400 for two",
      cuisines: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
      avgRating: 4.2,
      parentId: "19254",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 5.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "5.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-11 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹120 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=262087",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "661672",
      name: "City Diamond Haleem",
      cloudinaryImageId: "b328134beb7b0f5fe017b0cbf3515595",
      locality: "Jagadamba Nagar",
      areaName: "Asif Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Biryani", "North Indian", "Hyderabadi", "Haleem"],
      avgRating: 4.2,
      parentId: "509214",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-12 06:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=661672",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "816244",
      name: "Captain Cook",
      cloudinaryImageId: "937eb0f1857c97c4c0c3ad5fe41b9d6b",
      locality: "Mehdipatnam Circle No 12",
      areaName: "Hyderabad",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "Chinese"],
      avgRating: 3.9,
      parentId: "243228",
      avgRatingString: "3.9",
      totalRatingsString: "6",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-11 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=816244",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "159255",
      name: "Turkish Central",
      cloudinaryImageId: "im84ipgqnzj7tbxmlrct",
      locality: "Mallepally",
      areaName: "New Mallepally",
      costForTwo: "₹200 for two",
      cuisines: ["Turkish", "Arabian"],
      avgRating: 3.7,
      parentId: "19606",
      avgRatingString: "3.7",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-07-11 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹75 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=159255",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search </div>
      <div className="res-container">
        {objList.map((resObj, index) => (
          <RestaurantCard resData={resObj} key={index} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
