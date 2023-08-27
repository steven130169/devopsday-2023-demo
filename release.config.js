module.exports = {
    branches: ['main'],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      ['@semantic-release/npm',{npmPublish: false}],
      [
        '@semantic-release/changelog',
        {
          mangle: false,
          headerIds: false,
          changelogFile: 'CHANGELOG.md',
        },
      ],
      [
        '@semantic-release/git',
        {
          assets: ['CHANGELOG.md', 'package.json'],
          message:
            'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        },
      ],
      [
        '@semantic-release/github',
        {
          GH_TOKEN:"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"
        }
      ]
    ],
    publishConfig: {
      access: 'public',
    },
  };
  