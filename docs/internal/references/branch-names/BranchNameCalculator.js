import CodeBlock from '@theme/CodeBlock';
import React, { useMemo, useState } from 'react';

export function BranchNameCalculator() {
	const [owner, setOwner] = useState('');

	const [issueBased, setIssueBased] = useState(false);
	const [issueNumber, setIssueNumber] = useState(1);

	const [commitType, setCommitType] = useState('feat');
	const [scope, setScope] = useState('');
	const [description, setDescription] = useState('Add XY');

	const branchName = useMemo(
		() =>
			calculateBranchName(
				owner,
				issueBased,
				issueNumber,
				commitType,
				scope,
				description
			),
		[owner, issueBased, issueNumber, commitType, scope, description]
	);

	return (
		<div>
			<OwnershipFields owner={owner} setOwner={setOwner} />
			<IssueBasedFields
				issueBased={issueBased}
				setIssueBased={setIssueBased}
				issueNumber={issueNumber}
				setIssueNumber={setIssueNumber}
			/>
			<ConventionalCommitBasedFields
				disabled={issueBased}
				commitType={commitType}
				setCommitType={setCommitType}
				scope={scope}
				setScope={setScope}
				description={description}
				setDescription={setDescription}
			/>
			<br />
			<p>
				<strong>Your branch name:</strong>
			</p>

			<CodeBlock className="language-text">{branchName}</CodeBlock>
		</div>
	);
}

function calculateBranchName(
	owner,
	issueBased,
	issueNumber,
	commitType,
	scope,
	description
) {
	let branchName = owner.length ? `${owner}/` : ``;

	if (issueBased) branchName += `issue-${issueNumber}`;
	else {
		branchName += `${commitType}/${
			scope.length ? `${normalize(scope)}/` : ''
		}${normalize(description)}`;
	}

	return branchName;
}

function normalize(string) {
	return string
		.toLowerCase()
		.split(/[^a-z\-\/]/g)
		.join('-');
}

function OwnershipFields(props) {
	return (
		<fieldset>
			<legend>Ownership</legend>
			<GitHubUsernameInput
				owner={props.owner}
				setOwner={props.setOwner}
			></GitHubUsernameInput>
		</fieldset>
	);
}

function GitHubUsernameInput(props) {
	return (
		<label>
			Your GitHub Username (only set if you'll be de only one working on the
			branch):
			<br />
			<input
				value={props.owner}
				onChange={e => props.setOwner(e.target.value)}
				placeholder="No ownership specified"
			/>
		</label>
	);
}

function IssueBasedFields(props) {
	return (
		<fieldset>
			<legend>Issue-based</legend>
			<IsIssueBasedCheckbox
				issueBased={props.issueBased}
				setIssueBased={props.setIssueBased}
			></IsIssueBasedCheckbox>
			<br />
			<IssueNumberInput
				issueBased={props.issueBased}
				issueNumber={props.issueNumber}
				setIssueNumber={props.setIssueNumber}
			></IssueNumberInput>
		</fieldset>
	);
}

function IsIssueBasedCheckbox(props) {
	return (
		<label>
			<input
				type="checkbox"
				value={props.issueBased}
				onChange={e => props.setIssueBased(e.target.checked)}
			/>
			An issue discussing the change exists
		</label>
	);
}

function IssueNumberInput(props) {
	return (
		<label>
			Issue number:
			<br />
			<input
				type="number"
				min="1"
				step="1"
				disabled={!props.issueBased}
				value={props.issueNumber}
				onChange={e => props.setIssueNumber(e.target.value)}
			/>
		</label>
	);
}

function ConventionalCommitBasedFields(props) {
	return (
		<fieldset>
			<legend>Conventional Commit Based</legend>
			{props.issueBased && (
				<p>
					<i>Only available if name is not issue-based.</i>
				</p>
			)}
			<CommitTypeInput
				issueBased={props.issueBased}
				commitType={props.commitType}
				setCommitType={props.setCommitType}
			></CommitTypeInput>
			<br />
			<ScopeInput
				issueBased={props.issueBased}
				scope={props.scope}
				setScope={props.setScope}
			></ScopeInput>
			<br />
			<CommitDescriptionInput
				issueBased={props.issueBased}
				description={props.description}
				setDescription={props.setDescription}
			></CommitDescriptionInput>
		</fieldset>
	);
}

function CommitDescriptionInput(props) {
	return (
		<label>
			Description:
			<br />
			<input
				value={props.description}
				required
				onChange={e => props.setDescription(e.target.value)}
				disabled={props.issueBased}
			/>
		</label>
	);
}

function ScopeInput(props) {
	return (
		<label>
			Scope (optional):
			<br />
			<input
				value={props.scope}
				onChange={e => props.setScope(e.target.value)}
				placeholder="e.g., ci"
				disabled={props.issueBased}
			/>
		</label>
	);
}

function CommitTypeInput(props) {
	return (
		<label>
			Commit Type:
			<br />
			<select
				value={props.commitType}
				onChange={e => props.setCommitType(e.target.value)}
				disabled={props.issueBased}
				required
			>
				<option value="feat">feat (Newly implemented features)</option>
				<option value="fix">fix (Bug fixes)</option>
				<option value="docs">docs (Documentation-only changes)</option>
				<option value="chore">
					chore (build system, CI configuration, repo structure, etc.)
				</option>
				<option value="test">
					test (Added, removed or changed unit, integration or E2E tests)
				</option>
				<option value="refactor">
					refactor (internal refactorings without changes to external APIs)
				</option>
				<option value="style">style (fixed linting issues, etc.)</option>
				<option value="perf">perf (performance optimizations)</option>
			</select>
		</label>
	);
}
