export default {
  state: {
    selectedMethod: "",
    adding: [
      {
        name: "insert",
        shortDesc: "element to a list",
        desc: "Inserts element to a list.",
        example: `list.insert(2, 'tacos');<br>
        print(list);`,
        output: `[5, 1, 'tacos', 8]`
      },
      {
        name: "insertAll",
        shortDesc: "elements to a list",
        desc: "Inserts elements to a list.",
        example: `list.insertAll(2, ['tacos', 'universe']);<br>
        print(list);`,
        output: `[5, 1, 'tacos', 'universe', 8]`
      },
      {
        name: "add",
        shortDesc: "elements to the end of a list",
        desc:
          "Adds one element to the end of a list and returns the new length of the list.",
        example: `list.add(2);<br>
        print(list);`,
        output: "[5, 1, 8, 2]"
      },
      {
        name: "addAll",
        shortDesc: "elements to the end of a list",
        desc:
          "Adds one or more elements to the end of a list and returns the new length of the list.",
        example: `list.addAll([2, 9]);<br>
        print(list);`,
        output: "[5, 1, 8, 2, 9]"
      },
      {
        name: "ignore",
        customName: "Concat",
        customUrl: "operator_plus",
        shortDesc: "this list to other list(s) and/or value(s)",
        desc:
          "Returns a new list comprised of this list joined with other list(s) and/or value(s).",
        example: `List&lt;dynamic&gt; list2 = ['a', 'b', 'c'];<br>
        List&lt;Dynamic&gt; list3 = list + list2;<br>
        print(list3);`,
        output: `[5, 1, 8, 'a', 'b', 'c']`
      }
    ],
    removing: [
      {
        name: "removeAt",
        shortDesc: "element at index from a list",
        desc: "removes element at index.",
        example: `list.removeAt(2);<br>
        print(list);`,
        output: `[5, 1]`
      },
      {
        name: "removeWhere",
        shortDesc: "element from a list",
        desc: "removes element at index.",
        example: `list.removeWhere((item) => item == 8);<br>
        print(list);`,
        output: `[5, 1]`
      },
      {
        name: "removeLast",
        shortDesc: "the last element of the list",
        desc:
          "Removes the last element from the list and returns that element.",
        example: `list.removeLast();<br>
        print(list);`,
        output: `[5, 1]`
      },
      {
        name: "sublist",
        shortDesc:
          "one or more elements in order for use, leaving the list as is",
        desc:
          "The <code>sublist()</code> method returns a shallow copy of a portion of a list into a new list object. You can specify either just the beginning element (where end will default to the lists length) or both the beginning and the end, comma-separated. The original list will not be modified.",
        example: `var subList = list.sublist(1);<br>
        print(list);<br>
        print(subList);`,
        output: `[5, 1, 8]<br>
        [1, 8]`
      }
    ],
    string: [
      {
        name: "ignore",
        customName: "join",
        customUrl:
          "https://api.dart.dev/stable/2.8.4/dart-core/Iterable/join.html",
        shortDesc: "join all elements of the list into a string",
        desc: `Joins all elements of a list into a string. You can join it together as is or with something in between, <code>elements.join(' -
          ')</code> gives you <code>foo - bar</code>`,
        example: `print(list.join(","));`,
        output: `"5,1,8"`
      },
      {
        name: "ignore",
        customName: "toString",
        customUrl:
          "https://api.dart.dev/stable/2.8.4/dart-collection/ListMixin/toString.html",
        shortDesc: "return a string representing the list.",
        desc: "Returns a string representing the list and its elements.",
        example: `print(list.toString());`,
        output: `"[5,1,8]"`
      }
    ],
    ordering: [
      {
        name: "reversed",
        shortDesc: "reverse the order of the list",
        desc:
          "Reverses the order of the elements of a list in place — the first becomes the last, and the last becomes the first.",
        example: `var reversedList = list.reversed.toList();<br>
        print(reversedList);`,
        output: `[8, 1, 5]`
      },
      {
        name: "sort",
        shortDesc: "sort the items of the list",
        desc: `Sorts the elements of a list in place and returns the list.<br>
        <br>
        <strong>Important note:</strong> If compareFunction is not supplied, elements are sorted by converting them to strings and comparing strings in Unicode code point order. For example, "Banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in Unicode order. The docs have more information to clarify.`,
        example: `list.sort();<br>
        print(list);`,
        output: `[1, 5, 8]`
      }
    ],
    other: [
      {
        name: "length",
        shortDesc: "find the length of the list",
        desc: "Returns the number of elements in that list.",
        example: `print(list.length);`,
        output: `3`
      },
      {
        name: "ignore",
        customName: "filled",
        customUrl:
          "https://api.dart.dev/stable/2.8.4/dart-core/List/List.filled.html",
        shortDesc: "fill all the elements of the list with a static value",
        desc:
          "Fills all the elements of a list from a start index to an end index with a static value.",
        example: `list = List.filled(3, 2);<br>
        print(list);`,
        output: `[2, 2, 2]`
      },
      {
        name: "ignore",
        customName: "generate",
        customUrl:
          "https://api.dart.dev/stable/2.8.4/dart-core/List/List.generate.html",
        shortDesc: "generate all the elements of the list with a logic",
        desc:
          "Generates all the elements of a list from a start index to an end index with a static value.",
        example: `list = List.generate(3, (int index) => index + 1);<br>
        print(list);`,
        output: `[1, 2, 3]`
      }
    ],
    iterate: [
      {
        name: "ignore",
        customName: "forEach",
        customUrl:
          "https://api.dart.dev/stable/2.8.4/dart-core/Iterable/forEach.html",
        shortDesc: "executing a function I will create for each element",
        desc:
          "The forEach() method executes a provided function once for each list element.",
        example: `list.forEach((element) => print(element));`,
        output: `5<br>
        1<br>
        8`
      },
      {
        name: "ignore",
        customName: "map",
        customUrl:
          "https://api.dart.dev/stable/2.8.4/dart-core/Iterable/map.html",
        shortDesc:
          "creating a new list from each element with a function I create",
        desc:
          "Creates a new list with the results of calling a provided function on every element in this list.",
        example: `var map = list.map(x => x + 1).toList();<br>
        print(map);`,
        output: `[6, 2, 9]`
      },
      {
        name: "asMap",
        shortDesc: "creating a Map",
        desc:
          "Returns a new Map that contains the key/value pairs for each index in the list. There are a lot of uses for map, as well as other methods used with it in conjuction, like <code>values</code> and <code>keys</code>",
        example: `let map = list.asMap();<br>
        print(map);`,
        output: `{0: 1, 1: 2, 2: 3}`
      }
    ],
    find: {
      single: [
        {
          name: "ignore",
          customName: "contains",
          customUrl:
            "https://api.dart.dev/stable/2.8.4/dart-core/Iterable/contains.html",
          shortDesc: "out if a certain element exists",
          desc:
            "Determines whether a list contains a certain element, returning true or false as appropriate.",
          example: `print(list.contains(1));`,
          output: `true`
        },
        {
          name: "indexOf",
          shortDesc: "the first index of a particular item",
          desc:
            "Returns the first index at which a given element can be found in the list, or -1 if it is not present.",
          example: `print(list.indexOf(5));`,
          output: `0`
        },
        {
          name: "lastIndexOf",
          shortDesc: "the last index of a particular item",
          desc:
            "Returns the last (greatest) index of an element within the list equal to the specified value, or -1 if none is found.",
          example: `print(list.lastIndexOf(5));`,
          output: `0`
        },
        {
          name: "ignore",
          customName: "firstWhere",
          customUrl:
            "https://api.dart.dev/stable/2.8.4/dart-core/Iterable/firstWhere.html",
          shortDesc: "the first element that satisfies a condition",
          desc:
            "Returns the found value in the list, if an element in the list satisfies the provided testing function or undefined if not found. Similar to <code>findIndex()</code>, but it returns the item instead of the index.",
          example: `var isTiny = (el) => el < 2;<br>
          print(list.firstWhere(isTiny));`,
          output: `1`
        },
        {
          name: "indexWhere",
          shortDesc: "the first index of an item that satisfies a condition",
          desc:
            "Returns the index of the first element in the list that satisfies the provided testing function. Otherwise -1 is returned. Similar to <code>find()</code>, but it returns the index instead of the item.",
          example: `var isBig = (el) => el > 6;<br>
          print(list.indexWhere(isBig));`,
          output: `2`
        },
        {
          name: "ignore",
          customName: "reduce",
          customUrl:
            "https://api.dart.dev/stable/2.8.4/dart-core/Iterable/reduce.html",
          shortDesc: "a value by reducing the list, start to finish",
          desc:
            "Apply a function against an accumulator and each value of the list (from left-to-right) as to reduce it to a single value.",
          example: `var reducer = (value, elem) => value + elem;<br>
          print(list.reduce(reducer));`,
          output: `14`
        }
      ],
      many: [
        {
          name: "ignore",
          customName: "where",
          customUrl:
            "https://api.dart.dev/stable/2.8.4/dart-core/Iterable/where.html",
          shortDesc: "values based on a condition I create",
          desc:
            "Creates a new list with all of the elements of this list for which the provided filtering function returns true.",
          example: `var filtered = list.where(el => el > 4).toList();<br>
          print(filtered)`,
          output: `[5, 8]`
        },
        {
          name: "ignore",
          customName: "every",
          customUrl:
            "https://api.dart.dev/stable/2.8.4/dart-core/Iterable/every.html",
          shortDesc: "whether or not every item satisfies a condition",
          desc:
            "Returns true if every element in this list satisfies the provided testing function.",
          example: `print(list.every((el) => el < 10));`,
          output: `true`
        },
        {
          name: "ignore",
          customName: "any",
          customUrl:
            "https://api.dart.dev/stable/2.7.1/dart-core/Iterable/any.html",
          shortDesc: "whether or not at least one item satisfies a condition",
          desc:
            "Returns true if at least one element in this list satisfies the provided testing function.",
          example: `print(list.any((el) => el > 4));`,
          output: `true`
        }
      ]
    }
  }
};
