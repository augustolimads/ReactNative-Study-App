interface appMealDataProps {
  id: string;
  title: string;
  color: string;
}

function category(id: string, title: string, color: string): appMealDataProps {
  return { id, title, color };
}

export const appMealData: appMealDataProps[] = [
  category("c1", "Italian", "#f5428d"),
  category("c2", "Breakfast", "#9eecff"),
  category("c3", "Hamburguers", "#f5a442"),
  category("c4", "German", "#f5d142"),
  category("c5", "Exotic", "#41d95d"),
  category("c6", "Asian", "#b9ffb0"),
  category("c7", "French", "#ffc7ff"),
  category("c8", "Summer", "#47fced"),
];
