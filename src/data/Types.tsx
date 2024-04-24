export interface dataType {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  location: string;
  tags: string[];
  rating: string;
  description: string;
  equipments: string[];
  host: {
    name: string;
    picture: string;
  };
}
