export class Event {
    name:string;
    image:string;
    year:number;
    description:string;
    hasImage:boolean;

    type:number;
    //0 = African American
    //1 = Women's
    //2 = Native American's
    //3 = Asian's
    //4 = Mexican's
    //5 = LGBTQIA+
    //6 = GENERAL

    isActive:boolean;

    getColor():string {
        switch(this.type){
          case 0:
            return "black";
          case 1:
            return "pink";
          case 2:
            return "orange";
          case 3:
            return "red";
          case 4:
            return "Chartreuse";
          case 5:
            return "purple";
          case 6:
            return "aqua";
        }
      }

      getTextColor():string {
        if(this.type == 0 || this.type == 5)
            return "white";
        else
            return "black";
      }

      constructor(name:string, year:number, type:number, description:string, image:string){
        this.name = name;
        this.year = year;
        this.type = type;
        this.description = description;
        if(image != null){
          this.hasImage = true;
          this.image = "https://bkoss219.github.io/2019Timeline/assets/images/" + image + ".jpg";
        }
        else
          this.hasImage=false;
      }

}

export const EVENTS: Event[] = 
[
  new Event("Women get the Right to Vote", 1919, 1, "Congress passes the 19th amendment to give women the right to practice their democratic rights.", null),
  new Event("The Little Rock Nine", 1957, 0, "Nine black students in Arkansas are prevented from integrating into a previously white-only school; They are given support by troops, sent by Eisenhower.", null),
  new Event("Homosexuality is Decriminalized for the First Time", 1961, 5, "Illinois is the first state in the United States to repeal the sodomy laws, in July of 1961.", null),
  new Event("The Stonewall Riots", 1969, 5, "Police raid an inn in New York well known for gay activism, sparking the movement for LGBT rights across the United States.", "stonewall"),
  new Event("Harvey Milk is Elected", 1978, 5, "Harvey Milk becomes the first openly gay man to serve in office. He is murdered later that year by Dan White. In the 2008 film, Milk, he is portrayed by Sean Penn.", "milkjpg"),
  new Event("Zoot Suit Riots", 1943, 4, "A political fashion statement characterized by intentionally baggy clothing that often wasted material that should have been saved.", null),
  new Event("The United Farm Workers is Founded", 1965, 4, "Cesar Chavez and Dolores Huerta found the UFW, a labor union for farmers. The UFW also made history for being the first led by a woman.", null),
  new Event("Lauro Cavazos is Elected", 1988, 4, "Dr. Lauro Cavazos becomes the first Mexican American to be placed in a presidential cabinet, Secretary of Education, by Ronald Reagan.", "cavazos"),
  new Event("The Equal Pay Act", 1963, 1, "Kennedy signed a law prohibiting the discrimination of sex for wages between two people performing the same tasks.", null),
  new Event("Billie Jean King wins the Battle of the Sexes", 1973, 1, "In tennis, Billie Jean King wins the Battle of the Sexes against Bobby Riggs. She was also an activist for the LGBT community. In the 2018 film, Battle of the Sexes, she is portrayed by Emma Stone.", "kingAndRiggs"),
  new Event("The Grapes of Wrath is Published", 1939, 4, "John Steinbeck publishes a novel depicting the struggles of farm workers in California", null),
  new Event("The Indian Civil Rights Act is Passed", 1968, 3, "The act was passed by President Johnson, giving many Native American tribes something closer to citizenship: some civil rights (the Bill of Rights)", null),
  new Event("The Society of Human Rights is Founded", 1924, 5, "The Society of Human Rights, in Chicago, is founded. This organization is often claimed to be one of the first gay rights activist organizations.", null),
  new Event("Alfred Kinsey Becomes Well-Known", 1948, 5, "Alfred Kinsey, commonly known for his book, Sexual Behavior in the Human Male, and his theory of sexuality, the Kinsey Scale, becomes relatively popular. He is credited for educating the public on the widespread existence of homosexuality.", null),
  new Event("Rosa Parks is Arrested", 1955, 0, "Rosa Parks refuses to give her seat up to a white person on a bus in Alabama. As a result, the bus boycott in Montgomery, that lasted over a year, and word of her arrest apread across America, further bringing to the light the need for civil justice for African Americans.", null),
  new Event("\"Don't Ask, Don't Tell\"", 1993, 5, "While the act made it legal for gay men to serve in the army, it banned the expression of homosexuality. Passed by Clinton, it sparked a march on Washington pushing for recognition and in opposition of a rising number of hate crimes.", null),
  new Event("Executive Order 9981", 1948, 6, "President Truman signs the Executive Order 9981, declaring equal treatment and opportunity of people in the army.", null),
  new Event("Civil Rights Act of 1964", 1964, 6, "President Johnson signs the Civil Rights Act of 1964, expanding the prohibition of discrimination based on race, sex, religion, etc. in many aspects of American life. (see the Civil Rights Act of 1968 as well)", null),
  new Event("Civil Rights Act of 1968", 1968, 6, "President Johnson signs the Civil Rights Act of 1968, prohibiting descrimination based on color, sex or religion in the sale of land.", null),
  new Event("Civil Rights Act of 1991", 1991, 6, "President Bush signs the Civil Rights Act of 1991, further inforcing the prohibition of descrimination and providing support for those unlawfully descriminated in the workplace.", null),
  new Event("The Freedom Riders", 1961, 0, "A group of both African American and white people used facilities meant for the \"other color\" in opposition of segregation (seperate, but equal).", null),
  new Event("\"I Have a Dream\"", 1963, 0, "Martin Luther King Jr. leads a peaceful march on Washington, reciting his famous I Have a Dream speech, one of the strongest symbols of African American rights in US history.", "mlk"),
  new Event("MLK is Assassinated", 1968, 0, "Martin Luther King Jr. is assassinated 5 years following his famous I Have a Dream speech, becoming somewhat of a martyr in the African American rights movement.", null),
  new Event("Weeks v. Southern Bell", 1965, 1, "Many laws restricting women's work hours and conditions were loosened, opening up many previously male-only jobs.", null),
  new Event("Executive Order 11246", 1968, 1, "An Executive Order is passed that prohibits the descrimination of sex in government contractors, as well as many steps to hire more women.", null),
  new Event("The Longest Walk", 1978, 3, "A group of Native Americans marched to Washington to show opposition of their ancestors being removed from their original homes.", null),
  new Event("The National Congress of American Indians", 1944, 3, "A group that began representing the needs and wishes of tribal americans to congress.", null),
  new Event("National Indian Educational Association", 1969, 3, "The NIEA was formed to give native american children the same opportunities in education as the white students.", null),
  new Event("Bloody Sunday", 1965, 0, "In the push for voting rights, African Americans marched to Montgomery; they were blockaded in Selma by the police, who forcefully attacked many of the peaceful protestors. The event was considered the last step before the Voting Rights Act and was depicted in the 2014 film, Selma.", null),
  new Event("The Civil Rights Restoration Act", 1988, 6, "Congress passed the Civil Rights Restoration Act, which expanded nondescriminatory laws to private bodies receiving government money.", null),
  new Event("Brown v. Board of Education", 1954, 0, "This Supreme Court ruling attempted to force the integration of American segregated schools.", null),
  new Event("Loving v. Virginia", 1967, 0, "The laws prohibiting interracial marriage are finally abolished, after being declared unconstitutional.", null),
  new Event("The American Disabilities with Act", 1990, 6, "The ADA extends many nondescriminatory laws to persons with disabilities in cases such as education, employment, etc.", null),
  new Event("The Southern Christian Leadership Conferent", 1957, 0, "The SCLC is formed, with Martin Luther King Jr. as the leader. Though it sounds like a religious group, it was formed for the purpose of African American rights movements.", null),
  new Event("The Student Nonviolent Coordinating Committee", 1960, 0, "The SNCC (SNIK?) performed student sit-ins for the civil rights and black power movements.", null),
  new Event("Homosexuality is no Longer a Mental Illness", 1956, 5, "The APA, American Psychological Association, met and came to the conclusion that there were no substatial differences in the mental health of homosexual and heterosexual test subjects.", null),
  new Event("The First Pride Parade", 1970, 5, "In many cities across America, a now popular pro-LGBT parade called Pride is held for the first time. It is a time of celebration for how far the community has come, as well as recognition for how far we have to go.", null),
  new Event("HIV/AIDS Is Recognized", 1981, 5, "Initially considered a \"gay disease\", often depicted as a god's punishment by religious groups, is beginning to gain awareness by people not in the LGBT community.", null),
  new Event("Japan bombs Pearl Harbor", 1941, 2, "While not entirely a part of the civil rights movement, this was the first of a series of events leading to further discrimination of Japanese American peoples.", null),
  new Event("The Japanese Concentration Camps", 1943, 2, "Over 2,000 Japanese Americans are placed in concentration camps for fear of espionage.", null)
];