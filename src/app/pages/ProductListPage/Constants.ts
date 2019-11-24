// mapping toggle item options
const ToggleItemOptions = {
    Site: [
        {
            Label: "amazon.in",
            FilterType: "Site",
            FilterSubType: "amzin",
        },
        {
            Label: "amazon.com",
            FilterType: "Site",
            FilterSubType: "amzgl",
        },
        {
            Label: "flipkart.com",
            FilterType: "Site",
            FilterSubType: "flpkt",
        },
    ],
    Price: [
        {
            Label: "< 10,000",
            FilterType: "Price",
            FilterSubType: "lessThan10000",
        },
        {
            Label: "10,000 - 30,000",
            FilterType: "Price",
            FilterSubType: "lessThan30001",
        },
        {
            Label: "> 30,001",
            FilterType: "Price",
            FilterSubType: "moreThan30001",
        },
    ]
};

export {
    ToggleItemOptions
};