import React from "react";
import ReactDOM from "react-dom/client";


const Title = ()=> {
    return (
        <img alt="logo" className="headerImg"
        src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"></img>
    )
}

const Header = ()=> {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const restaurantList = [
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "461173",
        name: "Khadak Singh Da Dhaba",
        uuid: "db4a0f79-3abd-49a2-b859-7c791a1f6469",
        city: "24",
        area: "Rajendra Nagar",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "rsqhjipggypuvyhlb36v",
        cuisines: ["North Indian", "Mughlai", "Tandoor", "Indian"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: "24 MINS",
        lastMileTravel: 1.2999999523162842,
        slugs: {
          restaurant: "kadak-singh-da-dhaba-sahibabad-sahibabad-2",
          city: "noida",
        },
        cityState: "24",
        address:
          "Shop no 1, Plot 6/81, Krishna Kunj Apartments, Sec 2, Rajendra Nagar, Ghaziabad, UP- 201005",
        locality: "Sector 2",
        parentId: 13170,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹80 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹80 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=5746411~p=1~eid=00000185-d4de-3c7d-0de5-2e3700160114",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1.2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "461173",
          deliveryTime: 24,
          minDeliveryTime: 24,
          maxDeliveryTime: 24,
          lastMileTravel: 1.2999999523162842,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.0",
        totalRatings: 500,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "138435",
        name: "Burger King",
        uuid: "fee8047e-6827-4993-8c36-13420fd516da",
        city: "24",
        area: "Rajendra Nagar",
        totalRatingsString: "10000+ ratings",
        cloudinaryImageId: "r6nzwhz7rxj0ajejpvqn",
        cuisines: ["Burgers", "American"],
        tags: [],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        slaString: "23 MINS",
        lastMileTravel: 1,
        slugs: {
          restaurant: "burger-king-rajender-nagar-sahibabad",
          city: "noida",
        },
        cityState: "24",
        address:
          "Ground Floor and First Floor , Plot No-10, Rajendra Nagar, Sector 5,G.T Road,Ghaziabad-201005",
        locality: "Sector 5",
        parentId: 166,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 | Use code STEALDEAL",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "138435",
          deliveryTime: 23,
          minDeliveryTime: 23,
          maxDeliveryTime: 23,
          lastMileTravel: 1,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.1",
        totalRatings: 10000,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "67743",
        name: "Kwality Veg",
        uuid: "3900b6a4-0cd2-4d77-b666-0acd07ea4d93",
        city: "24",
        area: "Rajendra Nagar",
        totalRatingsString: "20+ ratings",
        cloudinaryImageId: "dqqj0frofy2njrqg7biy",
        cuisines: ["North Indian", "Chinese"],
        tags: [],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 20,
        minDeliveryTime: 20,
        maxDeliveryTime: 20,
        slaString: "20 MINS",
        lastMileTravel: 0.30000001192092896,
        slugs: {
          restaurant: "kwality-veg-sahibabad-sahibabad",
          city: "noida",
        },
        cityState: "24",
        address: "D-45. Shyam Park Extension, Sahibabad",
        locality: "Sahibabad",
        parentId: 122246,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹80 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹80 | Use code WELCOME50",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.3 kms",
        hasSurge: false,
        sla: {
          restaurantId: "67743",
          deliveryTime: 20,
          minDeliveryTime: 20,
          maxDeliveryTime: 20,
          lastMileTravel: 0.30000001192092896,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.7",
        totalRatings: 20,
        new: false,
      },
      subtype: "basic",
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "431720",
        name: "Bikkgane Biryani",
        uuid: "5f4b1634-3184-4ff2-8378-489e73898425",
        city: "24",
        area: "Sahibabad",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "pgtgx5ldlilice9apswc",
        cuisines: ["Biryani", "Hyderabadi", "Andhra"],
        tags: [],
        costForTwo: 35000,
        costForTwoString: "₹350 FOR TWO",
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        slaString: "24 MINS",
        lastMileTravel: 1,
        slugs: {
          restaurant: "bikkgane-biryani-sahibabad-sahibabad",
          city: "noida",
        },
        cityState: "24",
        address:
          "SHOP NO 2 , PLOT NUMBER 4, COMMERCIAL PLOT,SECTOR 5 , RAJENDRA NAGAR, GHAZIABAD, Rajendra Nagar Sector-2 & 5, Ghaziabad Nagar Nigam Zone-2, Ghaziabad, Uttar Pradesh - 201005",
        locality: "Rajendra Nagar",
        parentId: 5070,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "50% off",
          shortDescriptionList: [
            {
              meta: "50% off | Use GUILTFREEJAN",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹125 | Use code GUILTFREEJAN",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "50% OFF",
          shortDescriptionList: [
            {
              meta: "Use GUILTFREEJAN",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "50% off up to ₹125 | Use code GUILTFREEJAN",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [],
          totalFees: 0,
          message: "",
          title: "",
          amount: "",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "cid=5761433~p=4~eid=00000185-d4de-3c7d-0de5-2e380016042c",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "1 kms",
        hasSurge: false,
        sla: {
          restaurantId: "431720",
          deliveryTime: 24,
          minDeliveryTime: 24,
          maxDeliveryTime: 24,
          lastMileTravel: 1,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.1",
        totalRatings: 1000,
        new: false,
      },
      subtype: "basic",
    },
];

const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId})=> {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
            +cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{cuisines.join(', ')}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    )
}

const Body = ()=> {
    return (
        <div className="restaurant-list">
            {
                restaurantList.map((restaurant)=>{
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                })
            }
        </div>
    )
}

const Footer = ()=> {
    return (
        <div>Footer</div>
    )
}

const AppLayout = ()=> {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)