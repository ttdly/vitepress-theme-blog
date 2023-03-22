# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Colored Diffs in Code Blocks

Adding the `// [!code --]` or `// [!code ++]` comments on a line will create a diff of that line, while keeping the colors of the codeblock.

**Input**

Note that only one space is required after `!code`, here are two to prevent processing.

````
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code  --]
      msg: 'Added' // [!code  ++]
    }
  }
}
```
````

**Output**

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## Errors and Warnings in Code Blocks

Adding the `// [!code warning]` or `// [!code error]` comments on a line will color it accordingly.

**Input**

Note that only one space is required after `!code`, here are two to prevent processing.

````
```js
export default {
  data () {
    return {
      msg: 'Error', // [!code  error]
      msg: 'Warning' // [!code  warning]
    }
  }
}
```
````

**Output**

```js
export default {
  data() {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

## Line Numbers

You can enable line numbers for each code blocks via config:

```js
export default {
  markdown: {
    lineNumbers: true
  }
}
```

<!-- Please see [`markdown` options](/reference/site-config#markdown) for more details. -->

You can add `:line-numbers` / `:no-line-numbers` mark in your fenced code blocks to override the value set in config.

**Input**

````md
```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
````

**Output**

```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
