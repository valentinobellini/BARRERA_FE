function toCleanUniqueList(values) {
    const seen = new Set()
    const result = []

    for (const value of values) {
        if (typeof value !== 'string') continue

        const tag = value.trim()
        if (!tag) continue

        const normalizedKey = tag.toLowerCase()
        if (seen.has(normalizedKey)) continue

        seen.add(normalizedKey)
        result.push(tag)
    }

    return result
}

export function normalizeTags(rawTags) {
    if (Array.isArray(rawTags)) {
        return toCleanUniqueList(rawTags)
    }

    if (typeof rawTags === 'string') {
        const value = rawTags.trim()
        if (!value) return []

        if (value.startsWith('[') && value.endsWith(']')) {
            try {
                const parsed = JSON.parse(value)
                return normalizeTags(parsed)
            } catch {
                // Fall back to comma-separated parsing below.
            }
        }

        return toCleanUniqueList(value.split(','))
    }

    return []
}
