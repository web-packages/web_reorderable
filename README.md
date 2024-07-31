> [!WARNING]
> When using, keep in mind that this package is an alpha and development version.

<div align="center">
    <img src="https://github.com/user-attachments/assets/6f9bdb20-8d4f-4229-a845-8345c32cbec4">
    <h1>Web Reorderable</h1>
    <table>
        <thead>
          <tr>
            <th>Version</th>
            <th>v0.0.0-dev1</th>
          </tr>
        </tbody>
    </table>
</div>

Use web components to implement efficient and simple and flexible, soft reorderable list and grid.

## Usage

```html
<reorderable-list>
  <div key="uuid-1">...</div>
  <div key="uuid-2">...</div>
  <div key="uuid-3">...</div> <!-- ...children -->
</reorderable-list>
```

```html
<reorderable-grid rows="10">
  <div key="uuid-1">...</div>
  <div key="uuid-2">...</div>
  <div key="uuid-3">...</div> <!-- ...children -->
</reorderable-grid>
```

```html
<reorderable-connection>
  <div> <!-- The tree depth doesn't matter -->
    <reorderable-list>...</reorderable-list>
    <reorderable-list>...</reorderable-list>
  </div>
</reorderable-connection>
```