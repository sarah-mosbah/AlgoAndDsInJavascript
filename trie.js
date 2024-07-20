// Description: Implement a trie data structure
class Node {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let currentNode = this.root;
    for (const letter in word) {
      if (!currentNode.children.has(letter)) {
        currentNode.children.set(letter, new Node());
      }
      currentNode = currentNode.children.get(letter);
    }
    currentNode.isEndOfWord = true;
  }

  search(word) {
    let currentNode = this.root;
    for (const letter in word) {
      if (!currentNode.children.has(letter)) {
        return false;
      }
      currentNode = currentNode.children.get(letter);
    }
    return currentNode.isEndOfWord;
  }
}
