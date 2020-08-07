# Explorer


> An data-visualisation website which provides a platform where user can interact with Thesaurus Api and can build connection between related words (Synonyms or Antonyms).

![Main Home Page](https://github.com/ethereal999/Explorer/blob/master/public/img/1.jpg)

## Main Features
- [Get Started](#get-started)
- [Interactive Search](#interactive-search)
- [Network Expantion]
- [Manipulation]


### Get Started

![Get Started](https://github.com/ethereal999/Explorer/blob/master/public/img/2.jpg)

- User can enter words in search bar for which he want to create network with words related to the words that are entered.

### Interactive Search

![Interactive Search](https://github.com/ethereal999/Explorer/blob/master/public/img/3.jpg)

- On adding word to search word, User can make choice whether he want build connection of Synonyms or Antonyms.
- Based on user choice related data is fetched using Big Thesaurus API and fetched data is made subnode of the searched word along with new edges.
- Refresh button is also provided such that if user want to clear connections completely.

### Network Expantion
![Network Expantion](https://github.com/ethereal999/Explorer/blob/master/public/img/4.jpg)

- When a node is double-clicked then network is expanded with new data which contains words related to label of node which is double-clicked.
- Network is build using vis.js framework and thus can handle large amount of nodes and connections with high quality UI.

### Manipulation of Network
![Manipulation of Network](https://github.com/ethereal999/Explorer/blob/master/public/img/5.jpg)

- On the top of network , an manipulation bar is added inorder to control deletion of nodes and addition of edges.
- User can multiselect nodes and edges and can simultaneously delete all of them together.

