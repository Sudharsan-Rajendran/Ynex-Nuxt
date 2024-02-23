{
  "routes": [
    {
      "handle": "filesystem"
    },
    {
      "src": "/_nuxt/(.*)",
      "headers": { "Content-Type": "application/javascript" },
      "continue": true
    }
  ]
}