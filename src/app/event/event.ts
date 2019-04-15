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
    //4 = Latino's
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
          case 7:
            return "grey";
        }
      }

      getTextColor():string {
        if(this.type == 0 || this.type == 5 || this.type == 7)
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
  new Event("The Little Rock Nine", 1957, 0, "Nine black students in Arkansas are prevented from integrating into a previously white-only school; They are given support by troops, sent by Eisenhower.", "littlerocknine"),
  new Event("Homosexuality is Decriminalized for the First Time", 1961, 5, "Illinois is the first state in the United States to repeal the sodomy laws, in July of 1961.", null),
  new Event("The Stonewall Riots", 1969, 5, "Police raid an inn in New York well known for gay activism, sparking the movement for LGBT rights across the United States.", "stonewall"),
  new Event("Harvey Milk is Elected", 1978, 5, "Harvey Milk becomes the first openly gay man to serve in office. He is murdered later that year by Dan White. In the 2008 film, Milk, he is portrayed by Sean Penn.", "milkjpg"),
  new Event("Zoot Suit Riots", 1943, 4, "A political fashion statement characterized by intentionally baggy clothing that often wasted material that should have been saved.", "zoot"),
  new Event("The United Farm Workers is Founded", 1965, 4, "Cesar Chavez and Dolores Huerta found the UFW, a labor union for farmers. The UFW also made history for being the first led by a woman.", "ufw"),
  new Event("Lauro Cavazos is Elected", 1988, 4, "Dr. Lauro Cavazos becomes the first Mexican American to be placed in a presidential cabinet, Secretary of Education, by Ronald Reagan.", "cavazos"),
  new Event("The Equal Pay Act", 1963, 1, "Kennedy signed a law prohibiting the discrimination of sex for wages between two people performing the same tasks.", null),
  new Event("Billie Jean King wins the Battle of the Sexes", 1973, 1, "In tennis, Billie Jean King wins the Battle of the Sexes against Bobby Riggs. She was also an activist for the LGBT community. In the 2018 film, Battle of the Sexes, she is portrayed by Emma Stone.", "kingAndRiggs"),
  new Event("The Grapes of Wrath is Published", 1939, 4, "John Steinbeck publishes a novel depicting the struggles of farm workers in California", "grapes"),
  new Event("The Indian Civil Rights Act is Passed", 1968, 3, "The act was passed by President Johnson, giving many Native American tribes something closer to citizenship: some civil rights (the Bill of Rights)", null),
  new Event("The Society of Human Rights is Founded", 1924, 5, "The Society of Human Rights, in Chicago, is founded. This organization is often claimed to be one of the first gay rights activist organizations.", "ishr"),
  new Event("Alfred Kinsey Becomes Well-Known", 1948, 5, "Alfred Kinsey, commonly known for his book, Sexual Behavior in the Human Male, and his theory of sexuality, the Kinsey Scale, becomes relatively popular. He is credited for educating the public on the widespread existence of homosexuality.", "kinse"),
  new Event("Rosa Parks is Arrested", 1955, 0, "Rosa Parks refuses to give her seat up to a white person on a bus in Alabama. As a result, the bus boycott in Montgomery, that lasted over a year, and word of her arrest apread across America, further bringing to the light the need for civil justice for African Americans.", "rosa"),
  new Event("\"Don't Ask, Don't Tell\"", 1993, 5, "While the act made it legal for gay men to serve in the army, it banned the expression of homosexuality. Passed by Clinton, it sparked a march on Washington pushing for recognition and in opposition of a rising number of hate crimes.", null),
  new Event("Executive Order 9981", 1948, 6, "President Truman signs the Executive Order 9981, declaring equal treatment and opportunity of people in the army.", null),
  new Event("Civil Rights Act of 1964", 1964, 6, "President Johnson signs the Civil Rights Act of 1964, expanding the prohibition of discrimination based on race, sex, religion, etc. in many aspects of American life. (see the Civil Rights Act of 1968 as well)", null),
  new Event("Civil Rights Act of 1968", 1968, 6, "President Johnson signs the Civil Rights Act of 1968, prohibiting discrimination based on color, sex or religion in the sale of land.", null),
  new Event("Civil Rights Act of 1991", 1991, 6, "President Bush signs the Civil Rights Act of 1991, further inforcing the prohibition of discrimination and providing support for those unlawfully descriminated in the workplace.", null),
  new Event("The Freedom Riders", 1961, 0, "A group of both African American and white people used facilities meant for the \"other color\" in opposition of segregation (seperate, but equal).", "freedom"),
  new Event("\"I Have a Dream\"", 1963, 0, "Martin Luther King Jr. leads a peaceful march on Washington, reciting his famous I Have a Dream speech, one of the strongest symbols of African American rights in US history.", "mlk"),
  new Event("MLK is Assassinated", 1968, 0, "Martin Luther King Jr. is assassinated 5 years following his famous I Have a Dream speech, becoming somewhat of a martyr in the African American rights movement.", null),
  new Event("Weeks v. Southern Bell", 1965, 1, "Many laws restricting women's work hours and conditions were loosened, opening up many previously male-only jobs.", null),
  new Event("Executive Order 11246", 1968, 1, "An Executive Order is passed that prohibits the discrimination of sex in government contractors, as well as many steps to hire more women.", null),
  new Event("The Longest Walk", 1978, 3, "A group of Native Americans marched to Washington to show opposition of their ancestors being removed from their original homes.", "longestwalk"),
  new Event("The National Congress of American Indians", 1944, 3, "A group that began representing the needs and wishes of tribal americans to congress.", "ncai"),
  new Event("National Indian Educational Association", 1969, 3, "The NIEA was formed to give native american children the same opportunities in education as the white students.", "niea"),
  new Event("Bloody Sunday", 1965, 0, "In the push for voting rights, African Americans marched to Montgomery; they were blockaded in Selma by the police, who forcefully attacked many of the peaceful protestors. The event was considered the last step before the Voting Rights Act and was depicted in the 2014 film, Selma.", null),
  new Event("The Civil Rights Restoration Act", 1988, 6, "Congress passed the Civil Rights Restoration Act, which expanded nondescriminatory laws to private bodies receiving government money.", null),
  new Event("Brown v. Board of Education", 1954, 0, "This Supreme Court ruling attempted to force the integration of American segregated schools.", "brown"),
  new Event("Loving v. Virginia", 1967, 0, "The laws prohibiting interracial marriage are finally abolished, after being declared unconstitutional.", null),
  new Event("The American Disabilities with Act", 1990, 6, "The ADA extends many nondescriminatory laws to persons with disabilities in cases such as education, employment, etc.", "ada"),
  new Event("The Southern Christian Leadership Conferent", 1957, 0, "The SCLC is formed, with Martin Luther King Jr. as the leader. Though it sounds like a religious group, it was formed for the purpose of African American rights movements.", "sclc"),
  new Event("The Student Nonviolent Coordinating Committee", 1960, 0, "The SNCC (SNIK?) performed student sit-ins for the civil rights and black power movements.", "sncc"),
  new Event("Homosexuality is no Longer a Mental Illness", 1956, 5, "The APA, American Psychological Association, met and came to the conclusion that there were no substatial differences in the mental health of homosexual and heterosexual test subjects.", "apa"),
  new Event("The First Pride Parade", 1970, 5, "In many cities across America, a now popular pro-LGBT parade called Pride is held for the first time. It is a time of celebration for how far the community has come, as well as recognition for how far we have to go.", "pride"),
  new Event("HIV/AIDS Is Recognized", 1981, 5, "Initially considered a \"gay disease\", often depicted as a god's punishment by religious groups, is beginning to gain awareness by people not in the LGBT community.", null),
  new Event("Japan bombs Pearl Harbor", 1941, 2, "While not entirely a part of the civil rights movement, this was the first of a series of events leading to further discrimination of Japanese American peoples.", "pearl"),
  new Event("The Japanese Concentration Camps", 1943, 2, "Over 2,000 Japanese Americans are placed in concentration camps for fear of espionage.", "japanconcentrate"),
  new Event("The Asian American Legal Defense and Education Fund", 1974, 2, "The AALDEF became the first non-profit organization fighting for civil rights of Asian Americans.", "aaldef"),
  new Event("Asian Pacific American Heritage Week", 1978, 2, "A celebration of heritage, congress decided to recognize Asian Pacific American Heritage Week.", "apahm"),
  new Event("The Civil Liberties Act of 1988", 1988, 2, "The government formally apologized to the many hundreds of families afftected by the imprisonment of Japanese Americans with a $20,000 payback, 40 years after the original imprisonment.", null),
  new Event("National Asian Pacific American Legal Consortium", 1991, 2, "The joint organization of the AALDEF, the Asian Pacific American Legal Center, and the Asian Law Caucus.", null),
  new Event("Lizardo v. Denny's Inc.", 1998, 2, "Denny's is sued by the AALDEF because of the refusal to serve Asian American students. Those same students were beaten up in the parking lot by a group of white people. Despite being recent, it has highlighted the need for anti-discrimination training.", null),
  new Event("The 1945 War Brides Act", 1945, 2, "At a loss for methods of immigration, many Asian Americans abused this system to quickly gain citizenship (though many faced problems with the suspected spouse)", null),
  new Event("\"National Origins\"", 1965, 6, "National origins is removed from the immigration quote basis, placing all countries on equal footing; this also assisted the prevention of discrimination in immigration based on country of origin.", null),
  new Event("The Braccero Program", 1951, 4, "It was formalized as the MFLSP, to bring Mexican workers to the US.", "bracero"),
  new Event("Cesar Chavez & the Strike", 1966, 4, "Cesar Chavez leads a large group of farm workers on a strike march to San Joaquin Valley. It took them 25 days, but over time, new people joined the march to make the resulting few thousand strikers.", "chavez"),
  new Event("Harman Badillo is Elected", 1970, 4, "Herman Badillo becomes the first Puerto Rican in Congress.", "herman"),
  new Event("Miami & Cuban Growth", 1973, 4, "Florida's growing population of Cuban refugees leads to a growing number of Spanish-speaking facilities in Miami.", null),
  new Event("The National Hispanic Leadership Institute", 1987, 4, "The NHLI called for representation of Latinas in the workplace, as well as political positions.", null),
  new Event("Antonia C. Novello", 1990, 4, "Antonia C. Novello becomes both the first woman and the first Hispanic surgeon general in the US, by President George Bush.", "antonia"),
  new Event("Freedom Summer", 1964, 0, "In the summer, 1964, large groups of college students traveled to Mississippi to encourage people to be a part of the civil rights movement, as well as to help register new African American voters.", null),
  new Event("The Asian American Political Alliance", 1968, 2, "Yet another group dedicated to eradicating discrimination.", null),
  new Event("The Emancipation Proclimation", 1863, 7, "Signed by President Lincoln, it freed slaves held in Confederacy states (only).", null),
  new Event("The 14th Amendment", 1868, 7, "The 14th Amendment gave African Americans equal protection under the law to whites.", "14"),
  new Event("The 15th Amendment", 1870, 7, "The 15th Amendment gave African Americans the right to vote (yay!), though many opposed it.", "15"),
  new Event("The Civil Rights Act of 1875", 1875, 7, "The first civil rights act signed to give African Americans the right to use the same facilities as whites. It faced great opposition by supremacy groups.", null),
  new Event("Plessy v. Ferguson", 1896, 7, "The first official recognition of the \"Seperate, but Equal\"phrase, this gave shop-owners, facilities, etc. the right to discriminate based on color. While not a step in the right direction, it angered many African Americans, strengthening the Civil Rights Movement.", null),
  new Event("The NAACP", 1909, 0, "The National Association for the Advancement of Colored People, founded by many influential African American icons such as Ida Wells and W.E.B. DuBois, called for civil and public liberty.", "naacp"),
  new Event("The Civil Rights Act of 1866", 1866, 7, "All people born in the US are now automatically citizens.", null),
  new Event("The Civil Rights Act of 1871", 1871, 7, "The Act signed in to combat the Ku Klux Klan, also sometimes called the KKK Act.", null),
  new Event("Southern Horrors: Lynch Laws in All Its Phases", 1893, 7, "Ida B. Wells publishes a pamphlet calling out supremecy groups for violence against African Americans.", "ida"),
  new Event("Mary Kies", 1809, 7, "Mary Kies becomes the first woman to get a patent, weaving straw and silk.", "kies"),
  new Event("First Female Presidential Candidate", 1872, 7, "Victoria Claflin Woodhull becomes the first female candidate in the US. She is a candidate of the National Radical Reformers.", "victoria"),
  new Event("Wyoming Lets Women Vote", 1890, 7, "Wyoming becomes the first state to grant women the right to vote.", null),
  new Event("Women's Right to Own Land", 1900, 1, "By 1900, women are allowed to own land in each state in the US (provided they are married).", null),
  new Event("The Equal Rights Amendment", 1923, 1, "The first version of the ERA says men and women shall have equal rights.", null),
  new Event("Frances Perkins", 1933, 1, "Frances Perkins becomes the first female cabinet member, by Roosevelt.", "frances"),
  new Event("\"No Fault\"", 1969, 1, "California becomes the first state to allow divorce by mutual consent.", null),
  new Event("Sex Discrimination in Juries", 1975, 1, "The Supreme Court rules states are no longer allowed to exclude women from juries.", null),
  new Event("Paula Hawkins", 1980, 1, "Paula Hawkins becomes the first woman elected to the Senate individually.", "paula"),
  new Event("Sandra Day O'Connor", 1981, 1, "Sandra Day O'Connor becomes the first woman to serve in the Supreme Court", "sandra"),
  new Event("Sally K. Ride", 1983, 1, "Dr. Sally K. Ride becomes the first woman in space.", "sally"),
  new Event("The Year of the Woman", 1992, 1, "After Anita Hill accuses Clarence Thomas of sexual harassment, 4 women are elected to Senate and 2 dozen women elected to the house.", "yotw"),
  new Event("The Jones Act", 1917, 4, "Signed by President Woodrow, it gave Puerto Ricans full US Citizenship and representation in Congress.", null),
  new Event("Mendez v. Westminster", 1946, 4, "Mexican American parents challenged a school district that actively discriminated and segregated their children.", null),
  new Event("Economic Opportunity Act of 1964", 1964, 4, "Johnson signed the Economic Opportunity Act as a part of his \"War on Poverty\", which created VISTA and the Job Corps", "job"),
  new Event("The Elementary and Secondary Education Act", 1965, 4, "This act gave the federal government the right to enforce the 1964 Civil Rights Act.", null),
  new Event("The Equal Education Act of 1974", 1974, 6, "The EEOA prevented discrimination against both students and teachers that spoke second languages, as well as improving bilingual teaching in schools.", null),
  new Event("The US Voting Rights Act", 1975, 6, "Benefitting many groups across the US, the US Voting Rights Act attempted to further protect the rights of African Americans, Hispanic, and Asian voters.", null),
  new Event("Doe v. Plyer", 1980, 4, "A Supreme Court case ruling that gave children of illegal immigrants the right to free public education.", null),
  new Event("The Indian Appropriation Act", 1860, 7, "This act, passed by Congress, created the Indiant Reservation System, the beginning of the fight to protect Native American rights.", "iaa"),
  new Event("Native American Education in Pennsylvania", 1879, 7, "The first Native American boarding school is built, not in a reservation. The school was created to help assimilate Native American students.", null),
  new Event("Charles Curtis", 1907, 3, "Charles Curtis becomes the first Native American senator.", "charles"),
  new Event("The Indian Citizenship Act", 1924, 3, "Congress passed the ICA to give full citizenship to all Native Americans born within the country's borders.", "ica"),
  new Event("Charles Curtis, pt. 2", 1929, 3, "Charles Curtis makes history again, becoming the first Native American to serve as Vice President under Hoover.", null),
  new Event("The National Woman Suffrage Association", 1869, 7, "Susan B. Anthony and Elizabeth Cady Stanton form the NWSA to fight for women's rights to vote.", "susan"),
  new Event("Women's Suffrage Amendments", 1893, 7, "Colorado is the first state to create an amendment giving women the right to vote.", null),
  new Event("The National Women's Trade Union League", 1903, 1, "Created in 1903, the WTUL was formed to improve working conditions and salaries for women in the workplace.", null),
  new Event("The Congressional Union", 1913, 1, "Alice Paul and Lucy Burns form the Congressional Union to further fight for the right to vote. Later, it becomes the National Women's Party (NWP).", "congressionalunion"),
  new Event("Margaret Sanger", 1916, 1, "Margaret Sanger makes the first birth control clinic in New York. It was only open for 10 days, shortly followed by Sanger's arrest, but it began the fight for a woman's right to have control over her own body.", "margaret"),
  new Event("The Daughters of Bilitis", 1955, 5, "The first lesbian rights organization is formed in San Francisco.", "bilitis"),
  new Event("Dade County & \"Save Our Children\"", 1977, 5, "Dade County passes an ordinance making discrimination based on sexual orientation illegal.", null),
  new Event("National March on Washington", 1979, 5, "75,000 people participated in a march fighting for recognition and rights for the LGBT* community. It was the largest political gathering for this group in US history.", null),
  new Event("Berkeley Gives Couples Benefits", 1984, 5, "Berkeley, California, becomes the first city to give benefits to domestic couples (aka gay couples before they could get married).", null),
  new Event("Romer v. Evans", 1996, 5, "The Supreme Court ruled a Colorado amendment that declared LGBT rights were 'special rights'", null),
  new Event("Lawrence v. Texas", 2003, 5, "The Supreme Court rules sodomy laws are unconstitutional.", null),
  new Event("Vermont Recognizes Civil Unions", 2000, 5, "Vermont becomes the first state to legally recognize civil unions between gay or lesbian couples. This would give them the same benefits as spouses.", null)
]